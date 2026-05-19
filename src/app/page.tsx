
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import HomeHighlights from '@/components/HomeHighlights';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <Hero />
      <section className="px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-20">
          <FeaturedProducts />
          <HomeHighlights />
        </div>
      </section>
      <Footer />
    </main>
  );
}
