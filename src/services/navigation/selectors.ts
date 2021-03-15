import { createSelector } from 'reselect';
import { RouterLocation, RouterState } from 'connected-react-router';
import { IRootState } from '../../app/rootReducer.types';

export const getNavigationState = (state: IRootState): RouterState => state.router;

export const getNavigationLocation = createSelector(
  getNavigationState,
  (navState): RouterLocation<unknown> => navState.location,
);

export const getURLSearchString = createSelector(
  getNavigationLocation,
  (navLocation) => {
    const searchString = navLocation.search.replace(/^\?(.*)$/, '$1');

    return decodeURIComponent(searchString);
  },
);

export const getQueryParams = createSelector(
  getNavigationLocation,
  (navLocation) => navLocation.query,
);
