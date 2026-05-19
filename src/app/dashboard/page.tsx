'use client';

import { useMemo } from 'react';
import { orders, products } from '@/lib/mockData';
import AnimatedChart from '@/components/AnimatedChart';

export default function DashboardPage() {
  const totalRevenue = useMemo(
    () => orders.reduce((total, order) => total + Number(order.totalAmount.replace(/[^0-9.]/g, '')), 0),
    []
  );

  const currentOrders = orders.filter((order) => order.status !== 'Completed');

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Seller dashboard</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Performance overview</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400">New listing</button>
            <button className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">Analytics</button>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Total revenue</p>
              <p className="mt-4 text-4xl font-black text-white">${totalRevenue.toFixed(0)}</p>
              <p className="mt-3 text-sm text-slate-400">Revenue collected across Stripe and Solana Pay.</p>
            </div>
            <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Active products</p>
              <p className="mt-4 text-4xl font-black text-white">{products.length}</p>
              <p className="mt-3 text-sm text-slate-400">Live listings across verified storefronts.</p>
            </div>
          </div>

          <AnimatedChart />
        </div>

        <section className="mt-10 space-y-6">
          <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Customer orders</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Recent orders</h2>
              </div>
              <span className="rounded-3xl bg-white/5 px-4 py-2 text-sm text-slate-200">Real-time updates</span>
            </div>

            <div className="mt-8 space-y-4">
              {currentOrders.map((order) => (
                <div key={order.id} className="rounded-[1.75rem] border border-white/10 bg-surface/95 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">Order {order.id}</p>
                      <p className="text-sm text-slate-400">{order.productIds.length} item(s) • {order.paymentMethod}</p>
                    </div>
                    <div className="rounded-3xl bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">{order.status}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-slate-300">
                    <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                    <strong>{order.totalAmount}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
