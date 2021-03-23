import { ISearchResponseData } from '../../common/types';

export interface ISearchState {
  isPending: boolean;
  searchValue: string;
  page: number;
  pageSize: number;
  data: ISearchResponseData;
}
