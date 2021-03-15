import { put, select, takeEvery } from 'redux-saga/effects';
import actionsTypes from './actionsTypes';
import { getQueryParams } from '../navigation/selectors';
import { fetchAnswers } from './actions';
import { ROUTES_STATES } from '../../constants/routesStates';

function* onGetAnswers() {
  const idParamName = ROUTES_STATES.ANSWERS.id;
  const queryParams: {[key: string]: string } = yield select(getQueryParams);

  if (idParamName in queryParams && queryParams[idParamName] !== undefined) {
    yield put(fetchAnswers(queryParams[idParamName]));
  }
}

export default function* () {
  yield takeEvery(actionsTypes.GET_ANSWERS, onGetAnswers);
}
