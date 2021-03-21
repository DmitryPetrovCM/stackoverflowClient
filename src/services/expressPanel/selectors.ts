import { createSelector } from 'reselect';
import { IRootState } from '../../app/rootReducer.types';
import { IExpressPanelState, TExpressPanelDataType, TExpressPanelEntityId } from './reducer.types';
import {
  ISearchResponseData,
  ISearchResponseItem,
  ITableSearchItem,
  SEARCH_TABLE_PROPERTIES,
} from '../../common/types';
import { calculatePagesCount } from '../../utils';

export const getExpressPanelState = (state: IRootState): IExpressPanelState => state.expressPanel;

export const getIsExpressPanelOpened = createSelector<IRootState, IExpressPanelState, boolean>(
  getExpressPanelState,
  (expressPanelState) => expressPanelState.isOpened,
);

export const getExpressPanelDataType = createSelector<
  IRootState,
  IExpressPanelState,
  TExpressPanelDataType
>(getExpressPanelState, (expressPanelState) => expressPanelState.dataType);

export const getExpressPanelEntityId = createSelector<
  IRootState,
  IExpressPanelState,
  TExpressPanelEntityId
>(getExpressPanelState, (expressPanelState) => expressPanelState.entityId);

export const getExpressPanelResponseData = createSelector<
  IRootState,
  IExpressPanelState,
  ISearchResponseData
>(getExpressPanelState, (expressPanelState) => expressPanelState.data);

export const getExpressPanelItems = createSelector<
  IRootState,
  ISearchResponseData,
  ISearchResponseItem[]
>(getExpressPanelResponseData, (responseData) => responseData.items);

export const getExpressPanelTableItems = createSelector<
  IRootState,
  ISearchResponseItem[],
  ITableSearchItem[]
>(getExpressPanelItems, (items) => items.map((item) => ({
  [SEARCH_TABLE_PROPERTIES.AUTHOR]: {
    name: item?.owner?.display_name,
    id: item?.owner?.user_id,
  },
  [SEARCH_TABLE_PROPERTIES.TAGS]: item.tags,
  [SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: item.answer_count,
  [SEARCH_TABLE_PROPERTIES.TITLE]: item.title,
  questionId: item.question_id,
})));

export const getExpressPanelPageNumber = createSelector<IRootState, IExpressPanelState, number>(
  getExpressPanelState,
  (expressPanelState) => expressPanelState.pageNumber,
);

export const getExpressPanelPageSize = createSelector<IRootState, IExpressPanelState, number>(
  getExpressPanelState,
  (expressPanelState) => expressPanelState.pageSize,
);

export const getExpressPanelPagesCount = createSelector<
  IRootState,
  ISearchResponseData,
  number,
  number
>(getExpressPanelResponseData, getExpressPanelPageSize, ({ total }, pageSize) => (
  calculatePagesCount(total, pageSize)
));
