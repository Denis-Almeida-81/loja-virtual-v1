import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("essenza-cart") || "[]"),
  );

  useEffect(
    () => localStorage.setItem("essenza-cart", JSON.stringify(cart)),
    [cart],
  );

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found)
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      return [...current, { ...product, quantidade: 1 }];
    });
  }
  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }
  function changeQuantity(id, quantidade) {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, quantidade) }
          : item,
      ),
    );
  }
  function clearCart() {
    setCart([]);
  }

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantidade, 0),
    [cart],
  );
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearCart,
        totalItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
