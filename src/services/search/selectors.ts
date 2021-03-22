import { createSelector } from 'reselect';
import {
  ISearchState,
} from './reducer.types';
import { IRootState } from '../../app/rootReducer.types';
import { getQueryParams } from '../navigation/selectors';
import { IQueryParams } from '../navigation/selectors.types';
import { PAGE_SIZES } from '../../constants';
import {
  ISearchResponseData,
  ISearchResponseItem, ITableSearchItem,
  SEARCH_TABLE_PROPERTIES,
} from '../../common/types';
import { calculatePagesCount } from '../../utils';

export const getSearchState = (state: IRootState): ISearchState => state.search;

export const getSearchString = createSelector<IRootState, ISearchState, string>(
  getSearchState,
  (searchState) => searchState.searchValue,
);

export const getSearchData = createSelector<IRootState, ISearchState, ISearchResponseData>(
  getSearchState,
  (searchState) => searchState.data,
);

export const getSearchItems = createSelector<
  IRootState,
  ISearchResponseData,
  ISearchResponseItem[]
>(getSearchData, (searchData) => searchData.items);

export const getSearchTableItems = createSelector<
  IRootState,
  ISearchResponseItem[],
  ITableSearchItem[]
>(getSearchItems, (items) => items.map((item) => ({
  [SEARCH_TABLE_PROPERTIES.AUTHOR]: {
    name: item?.owner?.display_name,
    id: item?.owner?.user_id,
  },
  [SEARCH_TABLE_PROPERTIES.TAGS]: item.tags,
  [SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: item.answer_count,
  [SEARCH_TABLE_PROPERTIES.TITLE]: item.title,
  questionId: item.question_id,
})));

export const getPageSize = createSelector<IRootState, IQueryParams, number>(
  getQueryParams,
  ({ pageSize }) => +pageSize || PAGE_SIZES[0],
);

export const getCurrentPage = createSelector<IRootState, IQueryParams, number>(
  getQueryParams,
  ({ page }) => +page || 1,
);

export const getPagesCount = createSelector<IRootState, ISearchResponseData, number, number>(
  getSearchData,
  getPageSize,
  ({ total }, pageSize) => calculatePagesCount(total, pageSize),
);

export const getIsSearchTableDataPending = createSelector<IRootState, ISearchState, boolean>(
  getSearchState,
  (searchState) => searchState.isPending,
);
