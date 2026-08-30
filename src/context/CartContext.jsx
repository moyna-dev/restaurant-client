/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((items) => {
      const existing = items.find((cartItem) => cartItem.id === item.id);
      if (existing) return items.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
      return [...items, { ...item, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCartItems((items) => items.flatMap((item) => {
      if (item.id !== id) return [item];
      const quantity = item.quantity + amount;
      return quantity > 0 ? [{ ...item, quantity }] : [];
    }));
  }

  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  const value = useMemo(() => ({
    cartItems,
    itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    subtotal: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    addToCart,
    changeQuantity,
    removeFromCart,
  }), [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
