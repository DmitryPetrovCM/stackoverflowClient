import { createReducer } from 'redux-create-reducer';
import { success, error } from '@redux-requests/core';
import actionsTypes from './actionsTypes';
import { ISearchState } from './reducer.types';
import { PAGE_SIZES } from '../../constants';
/* import { ISearchSuccessAction, ISetSearchValueAction } from './actions.types'; */

const initialState: ISearchState = {
  isPending: false,
  searchValue: '',
  page: 1,
  pageSize: PAGE_SIZES[0],
  data: {
    items: [],
  },
};

/* type TSearchActions = ISetSearchValueAction | ISearchSuccessAction */

export default createReducer<ISearchState/* , TSearchActions */>(initialState, {
  [actionsTypes.SYNC_WITH_QUERY_STRING]: (state, { payload: { value, page, pageSize } }) => ({
    ...state,
    searchValue: value,
    page,
    pageSize,
  }),

  [actionsTypes.SET_SEARCH_VALUE]: (state, { searchValue }) => ({
    ...state,
    searchValue,
  }),

  [actionsTypes.SET_PAGE_NUMBER]: (state, { pageNumber }) => ({
    ...state,
    page: pageNumber || 1,
  }),

  [actionsTypes.CHANGE_PAGE_SIZE]: (state, { value }) => ({
    ...state,
    pageSize: value || PAGE_SIZES[0],
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
