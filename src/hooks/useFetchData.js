import { useEffect, useReducer } from "react";

import { axiosSWAPI } from '../apiUtils';

export const GET_DATA = 'GET_DATA';
export const SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
export const SET_DATA_FAILED = 'SET_DATA_FAILED';

export const initialReducerState = {
  data: {},
  dataLoading: true,
  dataLoadingError: false,
}

export const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data: [],
        dataLoading: true,
        dataLoadingError: false,
      }

    case SET_DATA_SUCCESS:
      return {
        data: action.payload,
        dataLoading: false,
        dataLoadingError: false,
      }

    case SET_DATA_FAILED:
      return {
        dataLoading: false,
        dataLoadingError: true,
      }

    default:
      return state;
  }
}

export const useFetchData = (apiQuery) => {
  const [data, dispatch] = useReducer(fetchDataReducer, initialReducerState);

  useEffect(() => {
    const fetchData = async () => {

      dispatch({ type: GET_DATA })

      await axiosSWAPI
      .post('', { query: apiQuery })
      .then(response => {
        dispatch({ type: SET_DATA_SUCCESS, payload: response.data.data });
      })
      .catch(err => {
        dispatch({ type: SET_DATA_FAILED });
        console.log(err)
      });
    }

    fetchData();
  }, []);

  return data;
}