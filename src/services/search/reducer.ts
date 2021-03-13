import { createReducer } from 'redux-create-reducer';
import actionsTypes from './actionsTypes';
import { ISearchState } from './reducer.types';
import { ISetSearchValueAction } from './actions.types';

const initialState = {
  searchValue: '',
};

export default createReducer<ISearchState, ISetSearchValueAction>(initialState, {
  [actionsTypes.SET_SEARCH_VALUE]: (state, { searchValue }: ISearchState): ISearchState => ({
    searchValue,
  }),
});
