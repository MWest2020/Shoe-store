import { useState, createContext, useContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider = ({ children }) => {
  // custom provider that pass down data to constumers
  // (only way to pass state up or down a few levels)
  const [cartOpen, setCartOpen] = useState(true);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};

const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { CartStateProvider, useCart };
