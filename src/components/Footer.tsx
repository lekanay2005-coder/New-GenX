
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/80 px-6 py-12 text-slate-400 backdrop-blur-xl sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">NEW-GenX</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">A premium decentralized marketplace powered by Solana, Supabase, and Stripe. Designed for modern creators and collectors.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a href="/marketplace" className="text-sm text-slate-300 transition hover:text-white">Marketplace</a>
          <a href="/dashboard" className="text-sm text-slate-300 transition hover:text-white">Dashboard</a>
          <a href="/login" className="text-sm text-slate-300 transition hover:text-white">Login</a>
        </div>
      </div>

      <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        © 2026 NEW-GenX. Built for future commerce.
      </p>
    </footer>
  );
}
