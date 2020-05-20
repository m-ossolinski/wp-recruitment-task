import React, {useContext} from 'react';
import { CartContext } from 'contexts/CartContext';

export const Cart = () => {
  const { cartAmount } = useContext(CartContext)
  console.log(cartAmount, 'cartItems')
  return (
    <div>
      cart amount {cartAmount}
    </div>
  )
}