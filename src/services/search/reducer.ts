import { createReducer } from 'redux-create-reducer';
import { success } from '@redux-requests/core';
import actionsTypes from './actionsTypes';
import { ISearchState } from './reducer.types';
import { PAGE_SIZES } from '../../constants';
/* import { ISearchSuccessAction, ISetSearchValueAction } from './actions.types'; */

const initialState: ISearchState = {
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

  [success(actionsTypes.FETCH_SEARCH)]: (state, { response: { data } }) => ({
    ...state,
    data,
  }),

  [actionsTypes.CHANGE_PAGE_SIZE]: (state, { value: pageSize }) => ({
    ...state,
    pageSize,
  }),
});
