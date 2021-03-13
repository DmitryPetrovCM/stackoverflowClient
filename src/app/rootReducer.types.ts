import { ISearchState } from '../services/search/reducer.types';

export interface IRootState {
  search: ISearchState,
  requests: {
    [k: string]: any,
  },
}
