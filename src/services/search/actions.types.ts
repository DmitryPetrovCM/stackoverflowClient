import { Action } from 'redux';
import actionsTypes from './actionsTypes';
import { ISearchResponseData } from './reducer.types';

export enum SEARCH_SORT {
  ACTIVITY = 'activity',
  CREATION = 'creation',
  VOTES = 'votes',
  RELEVANCE = 'relevance',
}

export interface ISetSearchValueAction extends Action {
  type: typeof actionsTypes.SET_SEARCH_VALUE;
  searchValue: string;
}

export interface ISearchSuccessAction extends Action {
  type: string;
  response: {
    data: ISearchResponseData;
    [key: string]: unknown;
  }
}

export interface ISearchParams {
  sort: SEARCH_SORT;
  pagesize?: number;
  site: string;
}
