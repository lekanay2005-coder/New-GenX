type Props = {
  active: string;
  onChange: (value: string) => void;
};

const categories = ['All', 'NFT', 'Digital', 'Physical', 'Service'];

export default function MarketplaceFilters({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            category === active
              ? 'bg-cyan-500 text-black'
              : 'bg-white/5 text-slate-200 hover:bg-white/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
