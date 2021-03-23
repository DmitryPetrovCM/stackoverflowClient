import actionTypes from './actionTypes';
import { IInitializeAction } from './actions.types';

export const initialize = (): IInitializeAction => ({
  type: actionTypes.INITIALIZE,
});
