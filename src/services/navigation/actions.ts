import { LocationDescriptorObject } from 'history';
import { IGoToAction } from './actions.types';
import actionsTypes from './actionsTypes';
import { ROUTES_NAMES } from '../../constants/routeNames';

export const goTo = (
  pathname: ROUTES_NAMES, params: LocationDescriptorObject = {},
): IGoToAction => ({
  type: actionsTypes.GO_TO,
  params: {
    ...params,
    pathname,
  },
});
