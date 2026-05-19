export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface text-white">
      <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-10 py-12 shadow-glow">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-500/50 border-t-cyan-300" />
        <p className="text-lg font-semibold">Loading NEW-GenX...</p>
      </div>
    </div>
  );
}
