import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/mockData';
import ProductDetailActions from '@/components/ProductDetailActions';

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
        <Link href="/marketplace" className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-white">
          ← Back to marketplace
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <section className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%)]" />
              <img src={product.image} alt={product.title} className="relative h-96 w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">{product.type}</span>
                <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-slate-300">{product.category}</span>
              </div>
              <h1 className="text-4xl font-black text-white">{product.title}</h1>
              <p className="max-w-3xl text-sm leading-7 text-slate-300">{product.description}</p>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Seller</p>
                  <p className="mt-2 text-lg font-semibold text-white">{product.seller}</p>
                </div>
                <span className="rounded-3xl bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200">{product.price}</span>
              </div>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-3xl bg-slate-950/70 px-4 py-4">
                  <span>Available</span>
                  <strong>{product.available}</strong>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-slate-950/70 px-4 py-4">
                  <span>Rating</span>
                  <strong>{product.rating.toFixed(1)} ★</strong>
                </div>
              </div>
            </div>
            <ProductDetailActions product={product} />
          </aside>
        </div>
      </div>
    </main>
  );
}
