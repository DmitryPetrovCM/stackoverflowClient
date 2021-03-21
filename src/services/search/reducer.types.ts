import { ISearchResponseData } from '../../common/types';

export interface ISearchState {
  searchValue: string;
  pageSize: number;
  data: ISearchResponseData;
}
