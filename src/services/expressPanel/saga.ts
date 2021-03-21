import { put, select, takeEvery } from 'redux-saga/effects';
import actionsTypes from './actionTypes';
import {
  ISetExpressPanelPageNumber,
  ISetExpressPanelPageSize,
  IShowAuthorPopularQuestionsAction, IShowTagPopularQuestionsAction,
} from './actions.types';
import {
  fetchAuthorPopularQuestions,
  fetchTagPopularQuestions,
  setExpressPanelEntityId,
  showExpressPanel,
} from './actions';
import { getExpressPanelDataType, getExpressPanelEntityId, getExpressPanelPageSize } from './selectors';
import {
  EXPRESS_PANEL_DATA_TYPE,
  TExpressPanelDataType,
  TExpressPanelEntityId,
} from './reducer.types';
import { ISearchParams } from '../../common/types';

function* onShowAuthorPopularQuestions({ authorId }: IShowAuthorPopularQuestionsAction) {
  if (!authorId) {
    return;
  }

  const pageSize: number = yield select(getExpressPanelPageSize);

  yield put(showExpressPanel());
  yield put(setExpressPanelEntityId(authorId));
  yield put(fetchAuthorPopularQuestions(authorId, { pagesize: pageSize }));
}

function* onShowTagPopularQuestions({ tag }: IShowTagPopularQuestionsAction) {
  if (!tag) {
    return;
  }

  const pageSize: number = yield select(getExpressPanelPageSize);

  yield put(showExpressPanel());
  yield put(setExpressPanelEntityId(tag));
  yield put(fetchTagPopularQuestions(tag, { pagesize: pageSize }));
}

function* updateExpressPanelData(params: ISearchParams) {
  const expressPanelDataType: TExpressPanelDataType = yield select(getExpressPanelDataType);
  const entityId: TExpressPanelEntityId = yield select(getExpressPanelEntityId);

  if (!entityId || !expressPanelDataType) {
    return;
  }

  if (expressPanelDataType === EXPRESS_PANEL_DATA_TYPE.AUTHOR) {
    yield put(fetchAuthorPopularQuestions(entityId as string, params));
    return;
  }

  if (expressPanelDataType === EXPRESS_PANEL_DATA_TYPE.TAGS) {
    yield put(fetchTagPopularQuestions(entityId as string, params));
  }
}

function* onPageNumberSet({ pageNumber }: ISetExpressPanelPageNumber) {
  if (!pageNumber) {
    return;
  }

  const pageSize: number = yield select(getExpressPanelPageSize);

  yield updateExpressPanelData({ page: pageNumber, pagesize: pageSize });
}

function* onPageSizeSet({ pageSize }: ISetExpressPanelPageSize) {
  if (!pageSize) {
    return;
  }

  yield updateExpressPanelData({ pagesize: pageSize });
}

export default function* () {
  yield takeEvery(actionsTypes.SHOW_AUTHOR_POPULAR_QUESTIONS, onShowAuthorPopularQuestions);
  yield takeEvery(actionsTypes.SHOW_TAG_POPULAR_QUESTIONS, onShowTagPopularQuestions);
  yield takeEvery(actionsTypes.SET_EXPRESS_PANEL_PAGE_NUMBER, onPageNumberSet);
  yield takeEvery(actionsTypes.SET_EXPRESS_PANEL_PAGE_SIZE, onPageSizeSet);
}
