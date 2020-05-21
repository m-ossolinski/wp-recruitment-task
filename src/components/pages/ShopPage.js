import React from 'react';
import { ProductsList } from 'components/productComponents';
import { AppLayout } from 'components/containers';
import { Cart } from 'components/cartComponents';

export const ShopPage = () => {
  return (
    <AppLayout cart={() => <Cart />}>
      <ProductsList />
    </AppLayout>
  )
}