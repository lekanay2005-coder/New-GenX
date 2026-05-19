import { Activity, CreditCard, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    title: 'Low-fee Solana transactions',
    description: 'Optimize minting and checkout with fast Solana settlements.',
    icon: Activity
  },
  {
    title: 'Seller analytics dashboard',
    description: 'Revenue charts, inventory health, and order tracking in one place.',
    icon: CreditCard
  },
  {
    title: 'Verified wallet trust',
    description: 'Phantom, Solflare, and Backpack support with reputation badges.',
    icon: ShieldCheck
  }
];

export default function HomeHighlights() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {highlights.map((highlight) => {
        const Icon = highlight.icon;
        return (
          <div key={highlight.title} className="glass rounded-[1.75rem] border border-white/10 p-8 shadow-glow">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
              <Icon size={26} />
            </div>
            <h3 className="text-2xl font-semibold text-white">{highlight.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{highlight.description}</p>
          </div>
        );
      })}
    </section>
  );
}
