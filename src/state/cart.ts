import { create } from "zustand";

interface CartState {
  cart: Record<string, number>;
  addProduct: (id: string) => void;
  removeProduct: (id: string) => void;
}

export const useCart = create<CartState>((set) => ({
  cart: {},
  addProduct: (id) =>
    set((state) => {
      const newCart = { ...state.cart };
      if (newCart[id]) {
        newCart[id]++;
      } else {
        newCart[id] = 1;
      }

      return { cart: newCart };
    }),
  removeProduct: (id) =>
    set((state) => {
      const newCart = { ...state.cart };
      delete newCart[id];

      return { cart: newCart };
    }),
}));
