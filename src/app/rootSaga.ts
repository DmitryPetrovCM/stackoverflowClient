import { spawn } from 'redux-saga/effects';
import searchSaga from '../services/search/saga';
import navigationSaga from '../services/navigation/saga';
import answersSaga from '../services/answers/saga';

export default function* rootSaga() {
  yield spawn(searchSaga);
  yield spawn(navigationSaga);
  yield spawn(answersSaga);
}
