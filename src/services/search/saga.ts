import { takeEvery, put, select } from 'redux-saga/effects';
import { getQueryParams } from '../navigation/selectors';
import { fetchSearch, search, syncWithQueryString } from './actions';
import { goTo, replaceRoute } from '../navigation/actions';
import { ROUTES_NAMES } from '../../constants/routeNames';
import actionsTypes from './actionsTypes';
import appActionsTypes from '../app/actionTypes';
import { PAGE_SIZES } from '../../constants';
import { ISearchAction } from './actions.types';
import { getCurrentPage, getPageSize, getSearchString } from './selectors';

interface ISearchData {
  value: string;
  page: number;
  pageSize: number;
}

function* loadData({ value, page, pageSize }: ISearchData) {
  yield put(
    fetchSearch(value, {
      pagesize: pageSize,
      page,
    }),
  );
}

function* onInitialize() {
  const { value, page, pageSize } = yield select(getQueryParams);
  const queryParams = {
    value: decodeURIComponent(value) || '',
    page: +page || 1,
    pageSize: +pageSize || PAGE_SIZES[0],
  };

  yield put(
    syncWithQueryString(queryParams),
  );
  yield loadData(queryParams);
}

function* onSearch({ isReplace }: ISearchAction) {
  const searchValue: string = yield select(getSearchString);
  const page: number = yield select(getCurrentPage);
  const pageSize: number = yield select(getPageSize);
  const queryParams = {
    value: searchValue,
    page,
    pageSize,
  };

  if (isReplace) {
    yield put(replaceRoute({ queryParams }));
  } else {
    yield put(goTo(ROUTES_NAMES.SEARCH_RESULT, queryParams));
  }

  yield loadData(queryParams);
}

function* onPageSizeChange() {
  yield put(search(true));
}

function* onSetPageNumber() {
  yield put(search());
}

export default function* () {
  yield takeEvery(appActionsTypes.INITIALIZE, onInitialize);
  yield takeEvery(actionsTypes.SEARCH, onSearch);
  yield takeEvery(actionsTypes.CHANGE_PAGE_SIZE, onPageSizeChange);
  yield takeEvery(actionsTypes.SET_PAGE_NUMBER, onSetPageNumber);
}
