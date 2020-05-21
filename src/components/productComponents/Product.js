import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'
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
          <ProductManufacturer
            key={id + uuid()}
            manufacturer={manufacturer}
          />
        ))}

      </ProductManufacturersWrapper>

      <ProductCostWrapper>
        {costInCredits ? `Cost: ₹${splitCostWithSpaces(costInCredits)}` : 'Not available to buy'}
      </ProductCostWrapper>

      {costInCredits ? <ProductForm /> : null}

    </ProductWrapper>
  )
}

Product.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    manufacturers: PropTypes.arrayOf(PropTypes.string).isRequired,
    costInCredits: PropTypes.number,
  }),
}

Product.defaultProps = {
  productData: {
    costInCredits: null,
  }
}