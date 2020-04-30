import * as actionTypes from './actionTypes';

export function getDataSuccess(data) {
  return {type: actionTypes.GET_DATA_SUCCESS, payload: data};
}

export function getData() {
  return function(dispatch) {
    let api = 'https://restcountries.eu/rest/v2/all';
    return fetch(api)
      .then(response => response.json())
      .then(result => dispatch(getDataSuccess(result)));
  };
}
