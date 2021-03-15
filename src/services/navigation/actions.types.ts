import { Action } from 'redux';
import { LocationDescriptorObject } from 'history';
import actionsTypes from './actionsTypes';

export interface IGoToAction extends Action {
  type: typeof actionsTypes.GO_TO;
  params: LocationDescriptorObject;
}
