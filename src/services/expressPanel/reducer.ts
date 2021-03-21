import { createReducer } from 'redux-create-reducer';
import { success } from '@redux-requests/core';
import actionsTypes from './actionTypes';
import { EXPRESS_PANEL_DATA_TYPE, IExpressPanelState } from './reducer.types';
import { PAGE_SIZES } from '../../constants';

const initialState: IExpressPanelState = {
  isOpened: false,
  dataType: null,
  entityId: '',
  pageNumber: 1,
  pageSize: PAGE_SIZES[0],
  data: {
    items: [],
  },
};

/* type TSearchActions = ISetSearchValueAction | ISearchSuccessAction */

export default createReducer<IExpressPanelState/* , TSearchActions */>(initialState, {
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

  [success(actionsTypes.FETCH_AUTHOR_POPULAR_QUESTIONS)]: (state, { response: { data } }) => ({
    ...state,
    dataType: EXPRESS_PANEL_DATA_TYPE.AUTHOR,
    data,
  }),

  [success(actionsTypes.FETCH_TAG_POPULAR_QUESTIONS)]: (state, { response: { data } }) => ({
    ...state,
    dataType: EXPRESS_PANEL_DATA_TYPE.TAGS,
    data,
  }),
});
