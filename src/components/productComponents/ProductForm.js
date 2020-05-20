import React, { useState } from 'react';
import { ProductFormWrapper } from './productStyle';

export const ProductForm = () => {
  const [starshipAmount, setStarshipAmount] = useState("");

  const addToCart = ev => {
    ev.preventDefault();
  }

  return (
    <ProductFormWrapper>
      <form onSubmit={ev => addToCart(ev)}>
        <input
          type="number"
          placeholder="Starship amount"
          name="amount"
          value={starshipAmount}
          onChange={e => setStarshipAmount(e.target.value)}
        />
        <input type="submit" value="Add to cart"/>
      </form>
    </ProductFormWrapper>
  )
}