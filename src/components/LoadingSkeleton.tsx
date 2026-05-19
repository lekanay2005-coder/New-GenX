type LoadingSkeletonProps = {
  count?: number;
};

export default function LoadingSkeleton({ count = 6 }: LoadingSkeletonProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="h-64 rounded-3xl bg-slate-900/70" />
          <div className="mt-5 space-y-4">
            <div className="h-5 w-3/4 rounded-full bg-slate-800" />
            <div className="h-4 w-1/2 rounded-full bg-slate-800" />
            <div className="flex items-center justify-between">
              <div className="h-10 w-20 rounded-full bg-slate-800" />
              <div className="h-10 w-10 rounded-full bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
