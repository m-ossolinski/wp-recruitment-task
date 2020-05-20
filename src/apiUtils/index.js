import axios from "axios";

export const axiosSWAPI = axios.create({
  baseURL: 'https://swapi.apis.guru',
});

export const SWAPI_STARSHIPS_QUERY = `
{
  allStarships {
    edges {
      node {
        id
        name
        manufacturers
        costInCredits
      }
    }
  }
}
`;