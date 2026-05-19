import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, stores } from '@/lib/mockData';

type Props = {
  params: { slug: string };
};

export default function StorePage({ params }: Props) {
  const store = stores.find((item) => item.slug === params.slug);

  if (!store) {
    notFound();
  }

  const storeProducts = products.filter((product) => product.storeSlug === store.slug);

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
        <Link href="/marketplace" className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-white">
          ← Back to marketplace
        </Link>
        <section className="glass rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Store profile</p>
              <h1 className="text-5xl font-black text-white">{store.name}</h1>
              <p className="max-w-3xl text-sm leading-7 text-slate-300">{store.description}</p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">Verified</span>
                <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">Owner: {store.owner}</span>
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick stats</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Products</p>
                  <p className="mt-2 text-3xl font-bold">{storeProducts.length}</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Verified</p>
                  <p className="mt-2 text-3xl font-bold">{store.verified ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-white">Store listings</h2>
          <div className="mt-6 grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {storeProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="glass group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="h-44 rounded-3xl bg-slate-950/80 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
                <div className="mt-5">
                  <p className="text-sm text-cyan-300">{product.type}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-cyan-300">{product.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{product.shortDescription}</p>
                  <div className="mt-4 flex items-center justify-between text-white">
                    <span>{product.price}</span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">{product.available} left</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
