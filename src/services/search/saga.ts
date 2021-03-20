import { takeEvery, put, select } from 'redux-saga/effects';
import actionsTypes from './actionsTypes';
import { getPageSize, getSearchString } from './selectors';
import { getQueryParams, getURLSearchString } from '../navigation/selectors';
import { fetchSearch, setSearchValue } from './actions';
import { IChangePageSizeAction, ISearchAction, ISetPageNumberAction } from './actions.types';
import { goTo, replaceRoute } from '../navigation/actions';
import { ROUTES_NAMES } from '../../constants/routeNames';
import { IQueryParams } from '../navigation/selectors.types';

function* onSearch({ params }: ISearchAction) {
  const searchString: string = yield select(getSearchString);
  const pageSize: number = yield select(getPageSize);
  const searchURLString: string = yield select(getURLSearchString);
  const { page } = yield select(getQueryParams);

  if (searchString !== searchURLString) {
    yield put(setSearchValue(searchURLString));
  }

  yield put(fetchSearch(searchURLString, {
    pagesize: pageSize,
    page,
    ...params,
  }));
}

function* onPageSizeChange({ value }: IChangePageSizeAction) {
  if (value) {
    yield put(replaceRoute({
      queryParams: {
        pageSize: value,
        page: 1,
      },
    }));
  }
}

function* onSetPageNumber({ pageNumber }: ISetPageNumberAction) {
  const queryParams: IQueryParams = yield select(getQueryParams);

  yield put(goTo(ROUTES_NAMES.SEARCH_RESULT, {
    ...queryParams,
    page: pageNumber || 1,
  }));
}

export default function* () {
  yield takeEvery(actionsTypes.SEARCH, onSearch);
  yield takeEvery(actionsTypes.CHANGE_PAGE_SIZE, onPageSizeChange);
  yield takeEvery(actionsTypes.SET_PAGE_NUMBER, onSetPageNumber);
}
