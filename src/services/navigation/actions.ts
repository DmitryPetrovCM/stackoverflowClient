import {
  IGoToAction, IReplaceAction, IReplaceParams, ISearchParams,
} from './actions.types';
import actionsTypes from './actionsTypes';
import { ROUTES_NAMES } from '../../constants/routeNames';

export const goTo = (
  pathName: ROUTES_NAMES, searchParams: ISearchParams = {},
): IGoToAction => ({
  type: actionsTypes.GO_TO,
  pathName,
  searchParams,
});

export const replaceRoute = ({ pathName, queryParams }: IReplaceParams): IReplaceAction => ({
  type: actionsTypes.REPLACE,
  pathName,
  queryParams,
});
