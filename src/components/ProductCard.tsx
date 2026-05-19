
'use client';

import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types';
import { useAppStore } from '@/store/useAppStore';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useAppStore((state) => state.addToCart);
  const toggleWishlist = useAppStore((state) => state.toggleWishlist);

  return (
    <div className="glass neon-border flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="h-64 bg-slate-900 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.32),transparent_45%)] p-4">
        <div className="flex h-full items-end rounded-[1.5rem] bg-gradient-to-br from-violet-700 via-fuchsia-700 to-slate-950 p-5 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{product.category}</p>
            <h3 className="mt-4 text-2xl font-bold leading-tight">{product.title}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
            {product.seller}
          </span>
          <span className="text-right text-sm font-semibold text-slate-100">{product.price}</span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{product.shortDescription}</p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={16} />
            Add to cart
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 transition hover:bg-white/10"
            onClick={() => toggleWishlist(product.id)}
            aria-label="Toggle wishlist"
          >
            <Heart size={18} />
          </button>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
