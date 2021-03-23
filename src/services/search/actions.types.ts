import { Action } from 'redux';
import actionsTypes from './actionsTypes';
import { ISearchResponseData } from '../../common/types';

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

export interface ISearchAction extends Action {
  type: typeof actionsTypes.SEARCH;
  isReplace: boolean;
}

export interface IChangePageSizeAction extends Action {
  type: typeof actionsTypes.CHANGE_PAGE_SIZE;
  value: number;
}

export interface ISetPageNumberAction extends Action {
  type: typeof actionsTypes.SET_PAGE_NUMBER;
  pageNumber: number;
}

export interface ISyncWithQueryActionParams {
  value: string;
  page: number;
  pageSize: number;
}

export interface ISyncWithQueryStringAction extends Action {
  type: typeof actionsTypes.SYNC_WITH_QUERY_STRING;
  payload: ISyncWithQueryActionParams;
}
