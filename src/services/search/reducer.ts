import { createReducer } from 'redux-create-reducer';
import { success } from '@redux-requests/core';
import actionsTypes from './actionsTypes';
import { ISearchState } from './reducer.types';
/* import { ISearchSuccessAction, ISetSearchValueAction } from './actions.types'; */

const initialState: ISearchState = {
  searchValue: '',
  data: {
    items: [],
  },
};

/* type TSearchActions = ISetSearchValueAction | ISearchSuccessAction */

export default createReducer<ISearchState/* , TSearchActions */>(initialState, {
  [actionsTypes.SET_SEARCH_VALUE]: (state, { searchValue }) => ({
    ...state,
    searchValue,
  }),

  [success(actionsTypes.SEARCH)]: (state, { response: { data } }) => ({
    ...state,
    data,
  }),
});
