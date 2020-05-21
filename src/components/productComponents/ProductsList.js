import React from 'react';
import styled from 'styled-components';
import { Product } from 'components/productComponents';
import { useFetchData } from 'hooks/useFetchData';
import { SWAPI_STARSHIPS_QUERY } from 'apiUtils';
import { DataLoader, LoaderWrapper } from './productStyle';

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
        <LoaderWrapper>
          <DataLoader />
        </LoaderWrapper>
      ) : (
        <PokemonListWrapper>
          {data && data.allStarships
          && data.allStarships.edges
            .map(({ node: productData }) => (
              <Product
                key={productData.name}
                productData={productData}
              />
            ))}
        </PokemonListWrapper>

      )}
      {dataLoadingError && <div>An error occurred while loading data!</div>}
    </div>
  )
}