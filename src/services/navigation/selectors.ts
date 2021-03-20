import { createSelector } from 'reselect';
import { RouterLocation, RouterState } from 'connected-react-router';
import { IRootState } from '../../app/rootReducer.types';
import { IQueryParams } from './selectors.types';

export const getNavigationState = (state: IRootState): RouterState => state.router;

export const getNavigationLocation = createSelector<
  IRootState,
  RouterState,
  RouterLocation<unknown>
>(getNavigationState, (navState) => navState.location);

export const getQueryParams = createSelector<IRootState, any, IQueryParams>(
  getNavigationLocation,
  (navLocation) => navLocation.query,
);

export const getURLSearchString = createSelector<IRootState, IQueryParams, string>(
  getQueryParams,
  (queryParams) => decodeURIComponent(queryParams.value),
);

export const getCurrentPathName = createSelector<IRootState, any, string>(
  getNavigationLocation,
  (navLocation) => navLocation.pathname,
);
