import React from 'react';
import { useFetchData } from "./hooks/useFetchData";
import { SWAPI_STARSHIPS_QUERY } from "./apiUtils";

export const ProductsList = () => {
  const { data, dataLoading, dataLoadingError } = useFetchData(SWAPI_STARSHIPS_QUERY)

  return (
    <div>
      {dataLoading ? (
        <div>loading...</div>
      ) : (
        data && data.allStarships
        && data.allStarships.edges
          .map(({ node: { id, name } }) => (
            <div key={id}>{name}</div>
          ))
      )}
      {dataLoadingError && <div>Wystąpił błąd podczas ładowania danych!</div>}
    </div>
  )
}