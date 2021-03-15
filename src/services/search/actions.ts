import actionsTypes from './actionsTypes';
import {
  IChangePageSizeAction, ISearchAction, ISearchParams, ISetSearchValueAction, SEARCH_SORT,
} from './actions.types';

export function setSearchValue(searchValue: string): ISetSearchValueAction {
  return {
    type: actionsTypes.SET_SEARCH_VALUE,
    searchValue,
  };
}

export const fetchSearch = (
  intitle: string,
  params: ISearchParams = { sort: SEARCH_SORT.RELEVANCE, pagesize: 5 },
) => ({
  type: actionsTypes.FETCH_SEARCH,
  request: {
    url: 'search?',
    method: 'GET',
    params: {
      intitle,
      order: 'desc',
      ...params,
    },
  },
});

export const search = (params: ISearchParams = {}): ISearchAction => ({
  type: actionsTypes.SEARCH,
  params,
});

export const changePageSize = (value: number): IChangePageSizeAction => ({
  type: actionsTypes.CHANGE_PAGE_SIZE,
  value,
});
