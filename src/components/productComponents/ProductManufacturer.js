import React from 'react';
import PropTypes from 'prop-types';
import { ProductManufacturerName } from './productStyle'

export const ProductManufacturer = (props) => {
  const { manufacturer } = props;

  return (
    <ProductManufacturerName>{manufacturer}</ProductManufacturerName>
  )
}

ProductManufacturer.propTypes = {
  manufacturer: PropTypes.string.isRequired,
}