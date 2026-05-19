'use client';

import toast from 'react-hot-toast';
import { Product } from '@/lib/types';
import { useAppStore } from '@/store/useAppStore';

type Props = {
  product: Product;
};

export default function ProductDetailActions({ product }: Props) {
  const addToCart = useAppStore((state) => state.addToCart);
  const toggleWishlist = useAppStore((state) => state.toggleWishlist);

  const handleBuy = () => {
    addToCart(product);
    toast.success('Added to cart. Ready for checkout.');
  };

  return (
    <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
      <div className="space-y-5">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Purchase options</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">Pay with Stripe or Solana Pay and receive a verified receipt for your NFT or physical order.</p>
        </div>
        <div className="grid gap-4">
          <button
            onClick={handleBuy}
            className="rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Add to cart
          </button>
          <button
            onClick={() => toggleWishlist(product.id)}
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white transition hover:bg-white/10"
          >
            Save to wishlist
          </button>
        </div>
        <div className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-300">
          <p>
            <strong>Note:</strong> Every order includes an NFT receipt and blockchain transaction metadata for seller verification.
          </p>
        </div>
      </div>
    </div>
  );
}
