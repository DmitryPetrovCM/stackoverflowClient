import { Action } from 'redux';
import actionsTypes from './actionTypes';
import { TExpressPanelEntityId } from './reducer.types';

export interface IShowExpressPanelAction extends Action {
  type: typeof actionsTypes.SHOW_EXPRESS_PANEL;
}

export interface IHideExpressPanelAction extends Action {
  type: typeof actionsTypes.HIDE_EXPRESS_PANEL;
}

export interface IShowAuthorPopularQuestionsAction extends Action {
  type: typeof actionsTypes.SHOW_AUTHOR_POPULAR_QUESTIONS;
  authorId: string;
}

export interface IShowTagPopularQuestionsAction extends Action {
  type: typeof actionsTypes.SHOW_TAG_POPULAR_QUESTIONS;
  tag: string;
}

export interface ISetExpressPanelPageNumber extends Action {
  type: typeof actionsTypes.SET_EXPRESS_PANEL_PAGE_NUMBER;
  pageNumber: number;
}

export interface ISetExpressPanelPageSize extends Action {
  type: typeof actionsTypes.SET_EXPRESS_PANEL_PAGE_SIZE;
  pageSize: number;
}

export interface ISetExpressPanelEntityId extends Action {
  type: typeof actionsTypes.SET_EXPRESS_PANEL_ENTITY_ID;
  entityId: TExpressPanelEntityId;
}
