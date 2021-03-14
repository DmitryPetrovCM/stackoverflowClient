import { createSelector } from 'reselect';
import {
  ISearchResponseItem, ISearchState, ITableSearchItem, MAIN_SEARCH_TABLE_PROPERTIES,
} from './reducer.types';
import { IRootState } from '../../app/rootReducer.types';

export const getSearchState = (state: IRootState): ISearchState => state.search;

export const getSearchString = createSelector<IRootState, ISearchState, string>(
  getSearchState,
  (searchState) => searchState.searchValue,
);

export const getSearchItems = createSelector<IRootState, ISearchState, ISearchResponseItem[]>(
  getSearchState,
  (searchState) => searchState.data.items,
);

export const getSearchTableItems = createSelector<
  IRootState,
  ISearchResponseItem[],
  ITableSearchItem[]
>(getSearchItems, (items) => items.map((item) => ({
  [MAIN_SEARCH_TABLE_PROPERTIES.AUTHOR]: {
    name: item?.owner?.display_name,
    img: item?.owner?.profile_image,
  },
  [MAIN_SEARCH_TABLE_PROPERTIES.TAGS]: item.tags,
  [MAIN_SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: item.answer_count,
  [MAIN_SEARCH_TABLE_PROPERTIES.TITLE]: item.title,
})));
