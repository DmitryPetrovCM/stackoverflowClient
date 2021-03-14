import { push } from 'connected-react-router';
import actionsTypes from './actionsTypes';
import { ISearchParams, ISetSearchValueAction, SEARCH_SORT } from './actions.types';
import { getSearchString } from './selectors';

export function setSearchValue(searchValue: string): ISetSearchValueAction {
  return {
    type: actionsTypes.SET_SEARCH_VALUE,
    searchValue,
  };
}

export const searchFor = (question: string, params: ISearchParams = { sort: SEARCH_SORT.RELEVANCE, pagesize: 20, site: 'stackoverflow' }) => ({
  type: actionsTypes.SEARCH,
  request: {
    url: 'search?',
    method: 'GET',
    params: {
      intitle: question,
      order: 'desc',
      ...params,
    },
  },
});

export const search = () => (dispatch: (action: any) => void, getState: () => any) => {
  const state = getState();
  const searchValue = getSearchString(state);

  if (searchValue) {
    dispatch(searchFor(searchValue));
    dispatch(push({ pathname: '/search', search: searchValue }));
  }
};
