import { ISearchState } from '../services/search/reducer.types';
import { IAnswersState } from '../services/answers/reducer.types';

export interface IRootState {
  search: ISearchState,
  answers: IAnswersState,
  requests: {
    [k: string]: any,
  },
  router: any,
}
