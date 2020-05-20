import React from 'react';
import styled from 'styled-components';
import { Product } from 'components/productComponents';
import { useFetchData } from 'hooks/useFetchData';
import { SWAPI_STARSHIPS_QUERY } from 'apiUtils';

export const ProductsList = () => {
  const { data, dataLoading, dataLoadingError } = useFetchData(SWAPI_STARSHIPS_QUERY);

  const PokemonListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 20px auto;
    min-height: calc(100vh - 80px);
  `;

  return (
    <div>
      {dataLoading ? (
        <div>Loading data...</div>
      ) : (
        <PokemonListWrapper>
          {data && data.allStarships
          && data.allStarships.edges
            .map(({ node: productData }) => (
              <Product
                key={productData.id}
                productData={productData}
              />
            ))}
        </PokemonListWrapper>

      )}
      {dataLoadingError && <div>An error occurred while loading data!</div>}
    </div>
  )
}