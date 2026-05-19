import { Order, Product, Store } from './types';

export const categories = ['NFT', 'Digital', 'Physical', 'Service'] as const;

export const stores: Store[] = [
  {
    slug: 'new-genx',
    name: 'NEW-GenX Studio',
    description: 'Curated drops, verified collectors, and fast Solana payments.',
    banner: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80',
    owner: 'Nebula Labs',
    verified: true
  },
  {
    slug: 'cyber-works',
    name: 'Cyber Works',
    description: 'Digital fashion, prints, and immersive NFT releases.',
    banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    owner: 'Cyber Forge',
    verified: false
  }
];

export const products: Product[] = [
  {
    id: 'genx-001',
    title: 'Neon Skyline NFT',
    seller: 'Nebula Labs',
    category: 'NFT',
    type: 'NFT',
    price: '4.2 SOL',
    currency: 'SOL',
    available: 12,
    rating: 4.9,
    shortDescription: 'Limited series NFT with a polished cyberpunk city concept.',
    description: 'A premium Solana NFT drop with enhanced metadata, royalty support and exclusive ownership rights. Includes access to future releases and holder perks.',
    image: 'https://images.unsplash.com/photo-1517867727012-6e7d0b85a4cc?auto=format&fit=crop&w=900&q=80',
    storeSlug: 'new-genx',
    verified: true
  },
  {
    id: 'genx-002',
    title: 'Crypto Hoodie',
    seller: 'Nebula Labs',
    category: 'Physical',
    type: 'Physical',
    price: '$85',
    currency: 'USD',
    available: 24,
    rating: 4.7,
    shortDescription: 'Soft matte hoodie designed for the modern collector.',
    description: 'A limited edition hoodie made for Web3 builders. Premium fabrics, custom embroidery, and fast worldwide shipping.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    storeSlug: 'new-genx',
    verified: true
  },
  {
    id: 'genx-003',
    title: 'AI Marketing Pack',
    seller: 'Cyber Forge',
    category: 'Digital',
    type: 'Digital',
    price: '$35',
    currency: 'USD',
    available: 50,
    rating: 4.8,
    shortDescription: 'Brand assets, social templates, and animated banners for launch campaigns.',
    description: 'A complete digital marketing toolkit for your Web3 project. Includes editable files and on-chain campaign guidance.',
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=900&q=80',
    storeSlug: 'cyber-works',
    verified: false
  },
  {
    id: 'genx-004',
    title: 'Launch Strategy Session',
    seller: 'Nebula Labs',
    category: 'Service',
    type: 'Service',
    price: '2.7 SOL',
    currency: 'SOL',
    available: 10,
    rating: 5.0,
    shortDescription: 'One-on-one growth plan for token launches and drops.',
    description: 'A strategic session designed for new Web3 brands, including roadmap evaluation, tokenomics review, and marketplace positioning.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    storeSlug: 'new-genx',
    verified: true
  },
  {
    id: 'genx-005',
    title: 'Meta UI Components',
    seller: 'Cyber Forge',
    category: 'Digital',
    type: 'Digital',
    price: '$28',
    currency: 'USD',
    available: 100,
    rating: 4.6,
    shortDescription: 'Futuristic UI kit for marketplaces and dashboards.',
    description: 'Design tokens, React components, and animated layouts tailored for Web3 storefronts.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    storeSlug: 'cyber-works',
    verified: false
  }
];

export const orders: Order[] = [
  {
    id: 'order-9001',
    createdAt: '2026-04-16T12:34:00Z',
    productIds: ['genx-001', 'genx-003'],
    totalAmount: '8.5 SOL',
    status: 'Completed',
    paymentMethod: 'Solana Pay'
  },
  {
    id: 'order-9002',
    createdAt: '2026-05-02T09:12:00Z',
    productIds: ['genx-002'],
    totalAmount: '$85',
    status: 'Processing',
    paymentMethod: 'Stripe'
  }
];
