import React from 'react';
import { ShopPage } from 'components/pages';
import { CartContextProvider } from 'contexts/CartContext';

export const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <ShopPage />
      </CartContextProvider>
    </div>
  );
}