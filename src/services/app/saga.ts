import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux';
import { replaceRoute } from '../navigation/actions';
import { ROUTES_NAMES } from '../../constants/routeNames';

interface ErrorAction extends Action {
  [key: string]: any;
  error: {
    [key: string]: any;
    response: {
      [key: string]: any;
      status: number;
      statusText: string;
    }
  }
}

const isErrorAction = (action: Action): boolean => Boolean(action.type.match(/.*ERROR$/i));

function* onError({ error }: Partial<ErrorAction>) {
  const { status, statusText } = error?.response || {};

  yield put(replaceRoute({
    pathName: ROUTES_NAMES.ERROR,
    queryParams: {
      status,
      statusText,
    },
  }));
}

export default function* () {
  yield takeEvery(isErrorAction, onError);
}
