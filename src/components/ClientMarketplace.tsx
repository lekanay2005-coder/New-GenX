'use client';

import { useEffect, useMemo, useState } from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import MarketplaceFilters from './MarketplaceFilters';
import LoadingSkeleton from './LoadingSkeleton';
import toast from 'react-hot-toast';

const getFilteredProducts = (products: Product[], query: string, category: string) => {
  return products.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase()) || product.shortDescription.toLowerCase().includes(query.toLowerCase()) || product.seller.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesQuery && matchesCategory;
  });
};

export default function ClientMarketplace() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => toast.error('Unable to load products.'))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => getFilteredProducts(products, query, category), [products, query, category]);

  return (
    <div className="space-y-12">
      <div className="glass rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Marketplace</p>
            <h1 className="mt-3 text-4xl font-black text-white">Discover the newest drops across all Web3 categories.</h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, NFTs, services..."
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
            <MarketplaceFilters active={category} onChange={setCategory} />
          </div>
        </div>
      </div>

      {loading ? (
        <LoadingSkeleton count={8} />
      ) : (
        <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center text-slate-300">
          No results found. Try another filter or search phrase.
        </div>
      )}
    </div>
  );
}
