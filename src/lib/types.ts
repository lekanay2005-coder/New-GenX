export type User = {
  id: string;
  email: string;
  displayName: string;
  walletAddress?: string;
  verifiedSeller: boolean;
  avatar?: string;
};

export type ProductType = 'NFT' | 'Digital' | 'Physical' | 'Service';

export type Product = {
  id: string;
  title: string;
  seller: string;
  category: string;
  type: ProductType;
  price: string;
  currency: string;
  available: number;
  rating: number;
  shortDescription: string;
  description: string;
  image: string;
  storeSlug: string;
  verified: boolean;
};

export type Order = {
  id: string;
  createdAt: string;
  productIds: string[];
  totalAmount: string;
  status: 'Pending' | 'Completed' | 'Processing';
  paymentMethod: 'Stripe' | 'Solana Pay';
};

export type Store = {
  slug: string;
  name: string;
  description: string;
  banner: string;
  owner: string;
  verified: boolean;
};

export type WalletConnection = {
  walletAddress: string;
  provider: 'Phantom' | 'Solflare' | 'Backpack';
  verified: boolean;
  connectedAt: string;
};

export type Transaction = {
  id: string;
  productId: string;
  walletAddress: string;
  amount: string;
  mintAddress?: string;
  status: 'Success' | 'Pending' | 'Failed';
  createdAt: string;
};
