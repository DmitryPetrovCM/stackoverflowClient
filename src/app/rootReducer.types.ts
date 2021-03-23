import { ISearchState } from '../services/search/reducer.types';
import { IAnswersState } from '../services/answers/reducer.types';
import { IExpressPanelState } from '../services/expressPanel/reducer.types';

export interface IRootState {
  search: ISearchState;
  answers: IAnswersState;
  expressPanel: IExpressPanelState;
  router: any;
}
