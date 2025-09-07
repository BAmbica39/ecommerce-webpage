import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const LS_KEY = "cart-v1";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const i = prev.findIndex(x => x.id === product.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(x => x.id !== id));
  const updateQty = (id, qty) => setCart(prev => prev.map(x => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
  const clearCart = () => setCart([]);

  const totals = useMemo(() => {
    const items = cart.reduce((n, x) => n + x.qty, 0);
    const amount = cart.reduce((n, x) => n + x.qty * x.price, 0);
    return { items, amount };
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totals }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
