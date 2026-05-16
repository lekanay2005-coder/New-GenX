
import ProductCard from './ProductCard';

const products = [
  { title: 'Cyberpunk Hoodie', price: '2.5 SOL', seller: 'Neo Labs' },
  { title: 'AI NFT Pack', price: '5 SOL', seller: 'Meta Forge' },
  { title: 'Creator Membership', price: '1.2 SOL', seller: 'VoidX' },
  { title: 'Web3 UI Kit', price: '3 SOL', seller: 'GenCore' },
];

export default function Marketplace() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-5xl font-black">Featured Products</h2>

          <button className="rounded-xl border border-purple-500/30 px-5 py-3 hover:bg-purple-500/10">
            View All
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
