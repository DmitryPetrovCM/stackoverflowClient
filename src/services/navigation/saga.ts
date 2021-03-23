import _ from 'lodash';
import { takeEvery, put, select } from 'redux-saga/effects';
import {
  LOCATION_CHANGE,
  LocationChangeAction,
  push,
  replace,
} from 'connected-react-router';
import queryString from 'query-string';
import actionsTypes from './actionsTypes';
import { IGoToAction, IReplaceAction } from './actions.types';
import { getCurrentPathName, getQueryParams } from './selectors';
import { IQueryParams } from './selectors.types';
import { ROUTES_NAMES } from '../../constants/routeNames';
import { initialize } from '../app/actions';

let prevNavAction = {};

function* onGoTo({ pathName, searchParams }: IGoToAction) {
  yield put(
    push({
      pathname: pathName,
      search: queryString.stringify(searchParams),
    }),
  );
}

function* onReplace({ pathName, queryParams = {} }: IReplaceAction) {
  const currentPathName: string = yield select(getCurrentPathName);
  const currentQueryParams: IQueryParams = yield select(getQueryParams);

  yield put(
    replace({
      pathname: pathName || currentPathName,
      search: queryString.stringify({
        ...currentQueryParams,
        ...queryParams,
      }),
    }),
  );
}

function* onLocationChange(action: LocationChangeAction) {
  /**
   * connected-react-router has the bug - double LOCATION_CHANGE call,
   * when redux dev-tools are enabled. So we use this check for this problem resolving
   */
  if (_.isEqual(prevNavAction, action)) {
    prevNavAction = { ...action };
    return;
  }

  const {
    payload: {
      isFirstRendering,
      location: { pathname },
      action: navAction,
    },
  } = action;

  if (pathname === ROUTES_NAMES.SEARCH_RESULT && (isFirstRendering || navAction === 'POP')) {
    yield put(initialize());
  }

  prevNavAction = { ...action };
}

export default function* () {
  yield takeEvery(actionsTypes.GO_TO, onGoTo);
  yield takeEvery(actionsTypes.REPLACE, onReplace);
  yield takeEvery(LOCATION_CHANGE, onLocationChange);
}
