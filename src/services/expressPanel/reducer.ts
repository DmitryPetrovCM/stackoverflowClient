import { createReducer } from 'redux-create-reducer';
import { success, error } from '@redux-requests/core';
import actionsTypes from './actionTypes';
import { EXPRESS_PANEL_DATA_TYPE, IExpressPanelState } from './reducer.types';
import { PAGE_SIZES } from '../../constants';

const initialState: IExpressPanelState = {
  isOpened: false,
  isPending: false,
  dataType: null,
  entityId: '',
  pageNumber: 1,
  pageSize: PAGE_SIZES[0],
  data: {
    items: [],
  },
};

const startFetchReducer = (state: IExpressPanelState) => ({
  ...state,
  isPending: true,
  data: {
    items: [],
  },
});

const failFetchReducer = (state: IExpressPanelState) => ({
  ...state,
  isPending: false,
  data: {
    items: [],
  },
});

const showExpressPanelReducer = (state: IExpressPanelState) => ({
  ...state,
  pageNumber: 1,
  pageSize: PAGE_SIZES[0],
});

export default createReducer<IExpressPanelState>(initialState, {
  [actionsTypes.SHOW_EXPRESS_PANEL]: (state) => ({
    ...state,
    isOpened: true,
  }),

  [actionsTypes.HIDE_EXPRESS_PANEL]: (state) => ({
    ...state,
    isOpened: false,
  }),

  [actionsTypes.SET_EXPRESS_PANEL_PAGE_NUMBER]: (state, { pageNumber }) => ({
    ...state,
    pageNumber,
  }),

  [actionsTypes.SET_EXPRESS_PANEL_PAGE_SIZE]: (state, { pageSize }) => ({
    ...state,
    pageSize,
  }),

  [actionsTypes.SET_EXPRESS_PANEL_ENTITY_ID]: (state, { entityId }) => ({
    ...state,
    entityId,
  }),

  [actionsTypes.FETCH_AUTHOR_POPULAR_QUESTIONS]: startFetchReducer,

  [actionsTypes.FETCH_TAG_POPULAR_QUESTIONS]: startFetchReducer,

  [success(actionsTypes.FETCH_AUTHOR_POPULAR_QUESTIONS)]: (state, { response: { data } }) => ({
    ...state,
    isPending: false,
    dataType: EXPRESS_PANEL_DATA_TYPE.AUTHOR,
    data,
  }),

  [success(actionsTypes.FETCH_TAG_POPULAR_QUESTIONS)]: (state, { response: { data } }) => ({
    ...state,
    isPending: false,
    dataType: EXPRESS_PANEL_DATA_TYPE.TAGS,
    data,
  }),

  [error(actionsTypes.FETCH_AUTHOR_POPULAR_QUESTIONS)]: failFetchReducer,

  [error(actionsTypes.FETCH_TAG_POPULAR_QUESTIONS)]: failFetchReducer,

  [actionsTypes.SHOW_AUTHOR_POPULAR_QUESTIONS]: showExpressPanelReducer,

  [actionsTypes.SHOW_TAG_POPULAR_QUESTIONS]: showExpressPanelReducer,
});
