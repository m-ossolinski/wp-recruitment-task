import React from 'react';
import { Product } from 'components/productComponents';
import { useFetchData } from 'hooks/useFetchData';
import { SWAPI_STARSHIPS_QUERY } from 'apiUtils';

export const ProductsList = () => {
  const { data, dataLoading, dataLoadingError } = useFetchData(SWAPI_STARSHIPS_QUERY);

  return (
    <div>
      {dataLoading ? (
        <div>Loading data...</div>
      ) : (
        data && data.allStarships
        && data.allStarships.edges
          .map(({ node: productData }) => (
            <Product
              key={productData.id}
              productData={productData}
            />
          ))
      )}
      {dataLoadingError && <div>An error occurred while loading data!</div>}
    </div>
  )
}