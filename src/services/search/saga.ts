import { takeEvery, put, select } from 'redux-saga/effects';
import actionsTypes from './actionsTypes';
import { getSearchString } from './selectors';
import { getURLSearchString } from '../navigation/selectors';
import { fetchSearch, setSearchValue } from './actions';

function* onSearch() {
  const searchString: string = yield select(getSearchString);
  const searchURLString: string = yield select(getURLSearchString);

  if (searchString !== searchURLString) {
    yield put(setSearchValue(searchURLString));
  }

  yield put(fetchSearch(searchURLString));
}

export default function* () {
  yield takeEvery(actionsTypes.SEARCH, onSearch);
}
