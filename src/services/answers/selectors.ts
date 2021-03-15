import { createSelector } from 'reselect';
import { IRootState } from '../../app/rootReducer.types';
import { IAnswersState } from './reducer.types';

export const getAnswersState = (state: IRootState): IAnswersState => state.answers;

export const getAnswers = createSelector(
  getAnswersState,
  (answersState) => answersState.data.items,
);

export const getBuf = createSelector(
  getAnswers,
  (answers) => answers.map((item) => ({
    id: item.answer_id,
    authorName: item?.owner?.display_name,
    score: item.score,
    answerBody: item.body,
  })),
);
