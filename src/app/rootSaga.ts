import { spawn } from 'redux-saga/effects';
import appSaga from '../services/app/saga';
import searchSaga from '../services/search/saga';
import navigationSaga from '../services/navigation/saga';
import answersSaga from '../services/answers/saga';
import expressPanelSaga from '../services/expressPanel/saga';

export default function* rootSaga() {
  yield spawn(appSaga);
  yield spawn(searchSaga);
  yield spawn(navigationSaga);
  yield spawn(answersSaga);
  yield spawn(expressPanelSaga);
}
