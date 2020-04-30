import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function dataReducer(state = initialState.data, action) {
  switch (action.type) {
    case actionTypes.GET_DATA_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
