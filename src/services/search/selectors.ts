import { createSelector } from 'reselect';
import { ISearchState } from './reducer.types';
import { IRootState } from '../../app/rootReducer.types';

export const getSearchState = (state: IRootState): ISearchState => state.search;

export const getSearchString = createSelector(
  getSearchState,
  (searchState: ISearchState): string => searchState.searchValue,
);
