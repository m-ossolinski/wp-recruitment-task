import React from 'react';
import styled from 'styled-components';
import bgImg from 'sw-bg.jpg'
import { AppHeader } from './AppHeader';

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-rows: 80px auto;
  background-image: url(${bgImg});
`;

const LayoutSectionWrapper = styled.section`
  padding: 14px 24px;
`;

export const AppLayout = (props) => {
  const { children, cart: Cart } = props;

  return (
    <LayoutWrapper>
      <AppHeader cartComponent={() => <Cart />}/>
      <LayoutSectionWrapper>
        {children}
      </LayoutSectionWrapper>
    </LayoutWrapper>
  )
}