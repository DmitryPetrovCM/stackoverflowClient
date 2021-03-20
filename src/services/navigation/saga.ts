import { takeEvery, put, select } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';
import queryString from 'query-string';
import actionsTypes from './actionsTypes';
import { IGoToAction, IReplaceAction } from './actions.types';
import { getCurrentPathName, getQueryParams } from './selectors';
import { IQueryParams } from './selectors.types';

function* onGoTo({ pathName, searchParams }: IGoToAction) {
  yield put(
    push({
      pathname: pathName,
      search: queryString.stringify(searchParams),
    }),
  );
}

function* onReplace({ pathName, queryParams = {} }: IReplaceAction) {
  if (pathName) {
    yield put(replace(pathName, queryParams));
  } else {
    const currentPathName: string = yield select(getCurrentPathName);
    const currentQueryParams: IQueryParams = yield select(getQueryParams);

    yield put(replace({
      pathname: currentPathName,
      search: queryString.stringify({
        ...currentQueryParams,
        ...queryParams,
      }),
    }));
  }
}

export default function* () {
  yield takeEvery(actionsTypes.GO_TO, onGoTo);
  yield takeEvery(actionsTypes.REPLACE, onReplace);
}
