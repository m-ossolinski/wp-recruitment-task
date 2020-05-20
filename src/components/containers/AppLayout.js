import React from 'react';
import styled from 'styled-components';
import { AppHeader } from "./AppHeader";

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-rows: 80px auto;
`;

const LayoutSectionWrapper = styled.section`
  background-color: #9cc1ed;
`;

export const AppLayout = (props) => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <AppHeader />
      <LayoutSectionWrapper>
        {children}
      </LayoutSectionWrapper>
    </LayoutWrapper>
  )
}