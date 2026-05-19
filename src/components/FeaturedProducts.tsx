import Link from 'next/link';
import { products } from '@/lib/mockData';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-glow backdrop-blur-xl sm:p-10">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Featured collections</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Curated drops handpicked for Web3 buyers.</h2>
        </div>
        <Link href="/marketplace" className="rounded-3xl border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500/10">
          Explore the Marketplace
        </Link>
      </div>
      <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
