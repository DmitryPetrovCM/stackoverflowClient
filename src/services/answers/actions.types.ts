import { Action } from 'redux';
import actionsTypes from './actionsTypes';

export enum ANSWERS_SORT {
  ACTIVITY = 'activity',
  CREATION = 'creation',
  VOTES = 'votes',
}

export interface IGetAnswersAction extends Action {
  type: typeof actionsTypes.GET_ANSWERS;
}

export interface IFetchAnswersAction extends Action {
  type: typeof actionsTypes.FETCH_ANSWERS;
  questionId: number;
}
