import React from 'react';
import { ProductManufacturer } from 'components/productComponents';
import {
  ProductName,
  ProductWrapper,
  ProductManufacturersWrapper,
  ManufacturersTitleWrapper,
  ProductCostWrapper,
} from './productStyle';
import { ProductForm } from './ProductForm';

const splitCostWithSpaces = (cost) =>
  cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const Product = (props) => {

  const {
    productData: {
      name,
      id,
      manufacturers,
      costInCredits,
    },
  } = props;

  return (
    <ProductWrapper>

      <ProductName>{name}</ProductName>

      <ProductManufacturersWrapper>

        <ManufacturersTitleWrapper>
          {manufacturers.length > 1 ? 'Manufacturers:' : 'Manufacturer:'}
        </ManufacturersTitleWrapper>

        {manufacturers.map(manufacturer => (
          <ProductManufacturer manufacturer={manufacturer} />
        ))}

      </ProductManufacturersWrapper>

      <ProductCostWrapper>
        {costInCredits ? `Cost: ₹${splitCostWithSpaces(costInCredits)}` : 'Not available to buy'}
      </ProductCostWrapper>

      {costInCredits ? <ProductForm productId={id} /> : null}

    </ProductWrapper>
  )
}