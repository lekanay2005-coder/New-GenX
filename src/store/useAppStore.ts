'use client';

import { create } from 'zustand';
import { Product, User } from '@/lib/types';

type AppState = {
  user: User | null;
  cart: Product[];
  wishlist: string[];
  orders: string[];
  setUser: (user: User) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  clearCart: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  cart: [],
  wishlist: [],
  orders: [],
  setUser: (user) => set({ user }),
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product]
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    })),
  toggleWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId]
    })),
  clearCart: () => set({ cart: [] })
}));
