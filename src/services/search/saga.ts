import { takeEvery, put, select } from 'redux-saga/effects';
import actionsTypes from './actionsTypes';
import { getPageSize, getSearchString } from './selectors';
import { getURLSearchString } from '../navigation/selectors';
import { fetchSearch, search, setSearchValue } from './actions';
import { IChangePageSizeAction, ISearchAction } from './actions.types';

function* onSearch({ params }: ISearchAction) {
  const searchString: string = yield select(getSearchString);
  const searchURLString: string = yield select(getURLSearchString);
  const pageSize: number = yield select(getPageSize);

  if (searchString !== searchURLString) {
    yield put(setSearchValue(searchURLString));
  }

  yield put(fetchSearch(searchURLString, {
    pagesize: pageSize,
    ...params,
  }));
}

function* onPageSizeChange({ value }: IChangePageSizeAction) {
  if (value) {
    yield put(search());
  }
}

export default function* () {
  yield takeEvery(actionsTypes.SEARCH, onSearch);
  yield takeEvery(actionsTypes.CHANGE_PAGE_SIZE, onPageSizeChange);
}
