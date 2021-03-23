import { Action } from 'redux';
import actionTypes from './actionTypes';

export interface IInitializeAction extends Action {
  type: typeof actionTypes.INITIALIZE;
}
