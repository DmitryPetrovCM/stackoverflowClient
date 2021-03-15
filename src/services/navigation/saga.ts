import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actionsTypes from './actionsTypes';
import { IGoToAction } from './actions.types';

function* onGoTo({ params }: IGoToAction) {
  yield put(push(params));
}

export default function* () {
  yield takeEvery(actionsTypes.GO_TO, onGoTo);
}
