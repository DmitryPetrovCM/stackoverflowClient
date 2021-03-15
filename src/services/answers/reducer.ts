import { createReducer } from 'redux-create-reducer';
import { success } from '@redux-requests/core';
import actionsTypes from './actionsTypes';
import { IAnswersState } from './reducer.types';
/* import { ISearchSuccessAction, ISetSearchValueAction } from './actions.types'; */

const initialState: IAnswersState = {
  data: {
    items: [],
  },
};

/* type TSearchActions = ISetSearchValueAction | ISearchSuccessAction */

export default createReducer<IAnswersState/* , TSearchActions */>(initialState, {
  [success(actionsTypes.FETCH_ANSWERS)]: (state, { response: { data } }) => ({
    ...state,
    data,
  }),
});
