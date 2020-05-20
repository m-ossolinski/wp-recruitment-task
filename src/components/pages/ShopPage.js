import React from 'react';
import styled from 'styled-components';
import { ProductsList } from 'components/productComponents';
import { AppLayout } from 'components/containers';

const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
`

export const ShopPage = () => {
  return (
    <AppLayout>
      <ShopWrapper>
        <ProductsList />
        <div style={{ backgroundColor: '#fff' }}>cart</div>
      </ShopWrapper>
    </AppLayout>
  )
}