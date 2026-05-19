import ClientMarketplace from '@/components/ClientMarketplace';

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
        <ClientMarketplace />
      </div>
    </main>
  );
}
