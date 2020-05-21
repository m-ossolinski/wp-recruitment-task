import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import { CartContext } from 'contexts/CartContext';
import cartIcon from 'cartIcon.svg';

export const Cart = () => {
  const { cartAmount } = useContext(CartContext)

  const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px;
  `;

  const ItemsAmount = styled.span`
    color: #fff;
    background-color: #feda4a;
    font-size: 20px;
    border-radius: 4px;
    text-align: center;
    min-width: 100px;
    display: flex;
    padding: 6px;
`;

  return (
    <CartWrapper>
      <ReactSVG src={cartIcon} />
      <ItemsAmount>Items amount: {cartAmount}</ItemsAmount>
    </CartWrapper>
  )
}