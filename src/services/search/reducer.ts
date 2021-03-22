import { createReducer } from 'redux-create-reducer';
import { success, error } from '@redux-requests/core';
import actionsTypes from './actionsTypes';
import { ISearchState } from './reducer.types';
import { PAGE_SIZES } from '../../constants';
/* import { ISearchSuccessAction, ISetSearchValueAction } from './actions.types'; */

const initialState: ISearchState = {
  isPending: false,
  searchValue: '',
  pageSize: PAGE_SIZES[0],
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

  [actionsTypes.FETCH_SEARCH]: (state) => ({
    ...state,
    isPending: true,
    data: {
      items: [],
    },
  }),

  [success(actionsTypes.FETCH_SEARCH)]: (state, { response: { data } }) => ({
    ...state,
    isPending: false,
    data,
  }),

  [error(actionsTypes.FETCH_SEARCH)]: (state) => ({
    ...state,
    isPending: false,
    data: {
      items: [],
    },
  }),
});
