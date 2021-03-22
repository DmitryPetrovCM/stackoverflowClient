import { createSelector } from 'reselect';
import { IRootState } from '../../app/rootReducer.types';
import { IAnswersState } from './reducer.types';

export const getAnswersState = (state: IRootState): IAnswersState => state.answers;

export const getAnswersItems = createSelector(
  getAnswersState,
  (answersState) => answersState.data.items,
);

export const getAnswers = createSelector(
  getAnswersItems,
  (answers) => answers.map((item) => ({
    id: item.answer_id,
    authorName: item?.owner?.display_name,
    score: item.score,
    answerBody: item.body,
  })),
);

export const getIsAnswersDataPending = createSelector<IRootState, IAnswersState, boolean>(
  getAnswersState,
  (answersState) => answersState.isPending,
);
