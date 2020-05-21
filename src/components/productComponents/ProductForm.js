import React, {useContext, useState} from 'react';
import { ProductFormWrapper, SubmitButton } from './productStyle';
import { CartContext } from 'contexts/CartContext';

export const ProductForm = () => {
  const { addItemToCart } = useContext(CartContext)

  const [starshipAmount, setStarshipAmount] = useState("");

  const addToCart = ev => {
    ev.preventDefault();
    addItemToCart(parseInt(starshipAmount, 10))
  }

  return (
    <ProductFormWrapper>
      <form className="product-form" onSubmit={ev => addToCart(ev)}>
        <input
          type="number"
          placeholder="Starship amount"
          name="amount"
          value={starshipAmount}
          onChange={e => setStarshipAmount(e.target.value)}
          min="1"
        />
        <SubmitButton type="submit" value="Add to cart" />
      </form>
    </ProductFormWrapper>
  )
}