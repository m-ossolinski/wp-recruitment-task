import React from 'react';
import styled from 'styled-components';

export const AppHeader = () => {
  const LayoutHeader = styled.header`
    background-color: #1975aa;
  `;

  return (
    <LayoutHeader>
      Wirtualna Polska recruitment task.
    </LayoutHeader>
  )
}