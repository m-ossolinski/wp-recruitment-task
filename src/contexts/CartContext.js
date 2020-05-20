import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cartAmount, setCartAmount] = useState(0);

  const addItemToCart = (itemAmount) => {
    setCartAmount(parseInt(cartAmount, 10) + parseInt(itemAmount, 10))
  };

  return (
    <CartContext.Provider value={{ cartAmount, addItemToCart }}>
      {props.children}
    </CartContext.Provider>
  )
}