import { put, select, takeEvery } from 'redux-saga/effects';
import actionsTypes from './actionsTypes';
import { getQueryParams } from '../navigation/selectors';
import { fetchAnswers } from './actions';
import { IQueryParams } from '../navigation/selectors.types';

function* onGetAnswers() {
  const { id }: IQueryParams = yield select(getQueryParams);

  if (id) {
    yield put(fetchAnswers(id));
  }
}

export default function* () {
  yield takeEvery(actionsTypes.GET_ANSWERS, onGetAnswers);
}
