
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b0764,transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">
            Built on Solana
          </div>

          <h1 className="text-6xl font-black leading-tight md:text-7xl">
            The Marketplace
            <br />
            of the
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Next Generation
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-xl text-zinc-400">
            Buy, sell, and launch products securely on the Solana blockchain.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold hover:scale-105 transition">
              Explore Marketplace
            </button>

            <button className="rounded-2xl border border-cyan-400/40 px-8 py-4 font-semibold hover:bg-cyan-400 hover:text-black transition">
              Start Your Store
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

          <Image
            src="/new-genx-logo.png"
            alt="NEW-GENX"
            width={500}
            height={500}
            className="relative z-10 rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
