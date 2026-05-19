
import { products } from '@/lib/mockData';
import ProductCard from './ProductCard';

export default function Marketplace() {
  const topProducts = products.slice(0, 4);

  return (
    <section className="glass section-glow mx-auto max-w-7xl rounded-[2rem] border border-white/10 px-6 py-12 shadow-glow backdrop-blur-xl sm:px-10 lg:px-14">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Marketplace spotlight</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Featured drops across categories</h2>
        </div>
        <a href="/marketplace" className="inline-flex items-center gap-2 rounded-3xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500/10">
          Explore full collection
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {topProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
