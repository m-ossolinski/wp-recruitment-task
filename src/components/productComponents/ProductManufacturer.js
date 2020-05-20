import React from 'react';
import { ProductManufacturerName } from './productStyle'

export const ProductManufacturer = (props) => {
  const { manufacturer } = props;

  return (
    <ProductManufacturerName>{manufacturer}</ProductManufacturerName>
  )
}