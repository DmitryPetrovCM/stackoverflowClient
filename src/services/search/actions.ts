import actionsTypes from './actionsTypes';
import {
  IChangePageSizeAction,
  ISearchAction,
  ISetPageNumberAction,
  ISetSearchValueAction,
  ISyncWithQueryActionParams,
  ISyncWithQueryStringAction,
} from './actions.types';
import { IFetchAction, ISearchParams, SEARCH_SORT } from '../../common/types';

export function setSearchValue(searchValue: string): ISetSearchValueAction {
  return {
    type: actionsTypes.SET_SEARCH_VALUE,
    searchValue,
  };
}

export const fetchSearch = (
  intitle: string,
  params: ISearchParams = { sort: SEARCH_SORT.RELEVANCE, pagesize: 5 },
): IFetchAction => ({
  type: actionsTypes.FETCH_SEARCH,
  request: {
    url: 'search',
    method: 'GET',
    params: {
      intitle,
      sort: 'votes',
      order: 'desc',
      filter: '!9_bDE.B6I',
      ...params,
    },
  },
});

export const search = (isReplace = false): ISearchAction => ({
  type: actionsTypes.SEARCH,
  isReplace,
});

export const changePageSize = (value: number): IChangePageSizeAction => ({
  type: actionsTypes.CHANGE_PAGE_SIZE,
  value,
});

export const setPageNumber = (pageNumber: number): ISetPageNumberAction => ({
  type: actionsTypes.SET_PAGE_NUMBER,
  pageNumber,
});

export const syncWithQueryString = (
  payload: ISyncWithQueryActionParams,
): ISyncWithQueryStringAction => ({
  type: actionsTypes.SYNC_WITH_QUERY_STRING,
  payload,
});
