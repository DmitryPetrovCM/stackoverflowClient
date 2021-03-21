import actionsTypes from './actionTypes';
import {
  IHideExpressPanelAction,
  ISetExpressPanelEntityId,
  ISetExpressPanelPageNumber,
  ISetExpressPanelPageSize,
  IShowAuthorPopularQuestionsAction,
  IShowExpressPanelAction, IShowTagPopularQuestionsAction,
} from './actions.types';
import { IFetchAction, ISearchParams } from '../../common/types';
import { TExpressPanelEntityId } from './reducer.types';

export const showExpressPanel = (): IShowExpressPanelAction => ({
  type: actionsTypes.SHOW_EXPRESS_PANEL,
});

export const hideExpressPanel = (): IHideExpressPanelAction => ({
  type: actionsTypes.HIDE_EXPRESS_PANEL,
});

export const fetchAuthorPopularQuestions = (
  authorId: string,
  params: ISearchParams = {},
): IFetchAction => ({
  type: actionsTypes.FETCH_AUTHOR_POPULAR_QUESTIONS,
  request: {
    url: `users/${authorId}/questions`,
    method: 'GET',
    params: {
      order: 'desc',
      filter: '!b6Aubh0zXf2Z5e',
      sort: 'votes',
      ...params,
    },
  },
});

export const fetchTagPopularQuestions = (
  tag: string,
  params: ISearchParams = {},
): IFetchAction => ({
  type: actionsTypes.FETCH_TAG_POPULAR_QUESTIONS,
  request: {
    url: `tags/${tag}/faq`,
    method: 'GET',
    params: {
      filter: '!9_bDE.B6I',
      ...params,
    },
  },
});

export const showAuthorPopularQuestions = (
  authorId: string,
): IShowAuthorPopularQuestionsAction => ({
  type: actionsTypes.SHOW_AUTHOR_POPULAR_QUESTIONS,
  authorId,
});

export const showTagPopularQuestions = (
  tag: string,
): IShowTagPopularQuestionsAction => ({
  type: actionsTypes.SHOW_TAG_POPULAR_QUESTIONS,
  tag,
});

export const setExpressPanelPageNumber = (pageNumber: number): ISetExpressPanelPageNumber => ({
  type: actionsTypes.SET_EXPRESS_PANEL_PAGE_NUMBER,
  pageNumber,
});

export const setExpressPanelPageSize = (pageSize: number): ISetExpressPanelPageSize => ({
  type: actionsTypes.SET_EXPRESS_PANEL_PAGE_SIZE,
  pageSize,
});

export const setExpressPanelEntityId = (
  entityId: TExpressPanelEntityId,
): ISetExpressPanelEntityId => ({
  type: actionsTypes.SET_EXPRESS_PANEL_ENTITY_ID,
  entityId,
});
