
type Props = {
  title: string;
  price: string;
  seller: string;
};

export default function ProductCard({ title, price, seller }: Props) {
  return (
    <div className="glass neon-border rounded-3xl p-4 transition hover:-translate-y-2">
      <div className="h-56 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400" />

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-sm text-cyan-300">
            Verified
          </span>
        </div>

        <p className="mt-2 text-zinc-400">{seller}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">{price}</span>
          <button className="rounded-xl bg-purple-600 px-4 py-2 hover:bg-purple-500">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
