import { Action } from 'redux';
import actionsTypes from './actionsTypes';
import { ROUTES_NAMES } from '../../constants/routeNames';

export interface ISearchParams {
  [key: string]: string | number | undefined;
}

export interface IGoToAction extends Action {
  type: typeof actionsTypes.GO_TO;
  pathName: string;
  searchParams: ISearchParams;
}

export interface IReplaceParams {
  pathName?: ROUTES_NAMES;
  queryParams?: ISearchParams | null;
}

export interface IReplaceAction extends Action {
  type: typeof actionsTypes.REPLACE;
  pathName?: string;
  queryParams?: ISearchParams | null;
}
