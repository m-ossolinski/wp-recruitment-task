import React from 'react';

export const Product = (props) => {
  const {
    productData: {
      name,
      id,
    }
  } = props;

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  )
}