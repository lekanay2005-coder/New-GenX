import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Connect your wallet',
    description: 'Use Phantom, Solflare or Backpack to sign in and manage your profile.',
    accent: 'Wallet setup'
  },
  {
    title: 'Explore marketplace listings',
    description: 'Filter NFTs, services, digital goods and physical drops with ease.',
    accent: 'Search & filter'
  },
  {
    title: 'Checkout with Solana Pay or Stripe',
    description: 'Complete purchases with secure payments and live order tracking.',
    accent: 'Fast settlement'
  }
];

export default function HowItWorks() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-glow backdrop-blur-xl sm:p-10">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">How it works</p>
        <h2 className="mt-3 text-4xl font-black text-white">Launch, shop and sell without friction.</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass rounded-[1.75rem] border border-white/10 p-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">Step {index + 1}</span>
            <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            <div className="mt-6 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
              {step.accent}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
