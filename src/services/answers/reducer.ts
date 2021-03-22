import { createReducer } from 'redux-create-reducer';
import { success, error } from '@redux-requests/core';
import actionsTypes from './actionsTypes';
import { IAnswersState } from './reducer.types';
/* import { ISearchSuccessAction, ISetSearchValueAction } from './actions.types'; */

const initialState: IAnswersState = {
  isPending: false,
  data: {
    items: [],
  },
};

/* type TSearchActions = ISetSearchValueAction | ISearchSuccessAction */

export default createReducer<IAnswersState/* , TSearchActions */>(initialState, {
  [actionsTypes.FETCH_ANSWERS]: (state) => ({
    ...state,
    isPending: true,
    data: {
      items: [],
    },
  }),

  [success(actionsTypes.FETCH_ANSWERS)]: (state, { response: { data } }) => ({
    ...state,
    isPending: false,
    data,
  }),

  [error(actionsTypes.FETCH_ANSWERS)]: (state) => ({
    ...state,
    isPending: false,
    data: {
      items: [],
    },
  }),
});
