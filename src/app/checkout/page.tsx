'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const cart = useAppStore((state) => state.cart);
  const clearCart = useAppStore((state) => state.clearCart);
  const router = useRouter();

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9.]/g, '')), 0),
    [cart]
  );

  const handleCheckout = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart })
    });

    if (response.ok) {
      const { checkoutUrl } = await response.json();
      clearCart();
      router.push(checkoutUrl);
    } else {
      toast.error('Checkout failed. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Checkout</p>
            <h1 className="mt-3 text-4xl font-black text-white">Complete your purchase</h1>
          </div>
          <span className="rounded-3xl bg-white/5 px-5 py-3 text-sm text-slate-200">{cart.length} items in cart</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
            {cart.length === 0 ? (
              <div className="rounded-[1.75rem] border border-dashed border-white/10 bg-surface/95 p-10 text-center text-slate-300">
                Your cart is empty. Add items from the marketplace to begin checkout.
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-surface/95 p-5">
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.seller}</p>
                    </div>
                    <p className="text-lg font-semibold text-cyan-300">{item.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Order summary</p>
              <div className="mt-8 space-y-4 text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Payment</span>
                  <span>Stripe + Solana Pay</span>
                </div>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={handleCheckout}
                className="mt-8 inline-flex w-full justify-center rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Complete payment
              </button>
            </div>
            <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
              <h2 className="text-xl font-bold text-white">Wallet payment</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Use your connected Solana wallet for instant low-cost payments with Phantom, Solflare, or Backpack.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
