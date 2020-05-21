import React from 'react';
import styled from 'styled-components';

export const AppHeader = (props) => {
  const { cartComponent: CartComponent } = props;

  const LayoutHeader = styled.header`
    display: grid;
    grid-template-columns: auto 20%;
  `;

  const LayoutTitle = styled.h1`
    font-family: 'Star Jedi', arial;
    font-size: 44px;
    text-shadow: 4px 4px 4px #aaa;
    margin: 14px 24px;
    color: #feda4a;
  `;

  return (
    <LayoutHeader>
      <LayoutTitle>Wirtualna Polska Recruitment Task</LayoutTitle>
      <CartComponent />
    </LayoutHeader>
  )
}