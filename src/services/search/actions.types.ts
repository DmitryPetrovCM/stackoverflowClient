import { Action } from 'redux';
import actionsTypes from './actionsTypes';
import { ISearchParams, ISearchResponseData } from '../../common/types';

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
  params: ISearchParams;
}

export interface IChangePageSizeAction extends Action {
  type: typeof actionsTypes.CHANGE_PAGE_SIZE;
  value: number;
}

export interface ISetPageNumberAction extends Action {
  type: typeof actionsTypes.SET_PAGE_NUMBER;
  pageNumber: number;
}
