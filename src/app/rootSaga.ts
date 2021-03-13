import { call } from 'redux-saga/effects';

function showConsole() {
  console.log('SAGA');
}

export default function* rootSaga() {
  yield call(showConsole);
}
