import actionsTypes from './actionsTypes';
import { IGetAnswersAction } from './actions.types';

export const getAnswers = (): IGetAnswersAction => ({
  type: actionsTypes.GET_ANSWERS,
});

export const fetchAnswers = (questionId: string) => ({
  type: actionsTypes.FETCH_ANSWERS,
  request: {
    url: `questions/${questionId}/answers`,
    method: 'GET',
    params: {
      order: 'desc',
      filter: '!9_bDE(fI5',
      sort: 'votes',
    },
  },
});
