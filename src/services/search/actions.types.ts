import { Action } from 'redux';
import actionsTypes from './actionsTypes';

export enum SEARCH_SORT {
  ACTIVITY = 'activity',
  CREATION = 'creation',
  VOTES = 'votes',
  RELEVANCE = 'relevance',
}

export interface ISetSearchValueAction extends Action {
  type: typeof actionsTypes.SET_SEARCH_VALUE,
  searchValue: string,
}

export interface ISearchParams {
  sort: SEARCH_SORT,
  pagesize?: number,
  site: string,
}
