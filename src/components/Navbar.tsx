
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-purple-500/20 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/new-genx-logo.png"
            alt="NEW-GENX"
            width={120}
            height={50}
            className="rounded-lg"
          />
        </div>

        <div className="hidden gap-8 md:flex text-zinc-300">
          <a href="#">Marketplace</a>
          <a href="#">Stores</a>
          <a href="#">NFTs</a>
          <a href="#">Dashboard</a>
        </div>

        <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 font-semibold transition hover:scale-105">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
