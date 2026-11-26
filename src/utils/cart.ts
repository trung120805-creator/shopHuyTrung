import type { Product } from "../data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export function addToCart(cart: CartItem[], product: Product, quantity = 1): CartItem[] {
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    return cart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...cart, { product, quantity }];
}

export function removeFromCart(cart: CartItem[], productId: number): CartItem[] {
  return cart.filter((item) => item.product.id !== productId);
}

export function updateQuantity(
  cart: CartItem[],
  productId: number,
  quantity: number
): CartItem[] {
  if (quantity <= 0) return removeFromCart(cart, productId);
  return cart.map((item) =>
    item.product.id === productId ? { ...item, quantity } : item
  );
}

export function countItems(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function calcTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
