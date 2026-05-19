import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface text-white">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">404 error</p>
        <h1 className="mt-4 text-5xl font-black">Page not found</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">The marketplace you are looking for may have moved, or the link is broken.</p>
        <Link href="/" className="mt-8 inline-flex rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400">
          Return home
        </Link>
      </div>
    </main>
  );
}
