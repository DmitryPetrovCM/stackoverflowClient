import { spawn } from 'redux-saga/effects';
import searchSaga from '../services/search/saga';
import navigationSaga from '../services/navigation/saga';
import answersSaga from '../services/answers/saga';
import expressPanelSaga from '../services/expressPanel/saga';

export default function* rootSaga() {
  yield spawn(searchSaga);
  yield spawn(navigationSaga);
  yield spawn(answersSaga);
  yield spawn(expressPanelSaga);
}
