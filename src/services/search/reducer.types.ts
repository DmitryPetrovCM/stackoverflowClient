import { ISearchResponseData } from '../../common/types';

export interface ISearchState {
  isPending: boolean;
  searchValue: string;
  pageSize: number;
  data: ISearchResponseData;
}
