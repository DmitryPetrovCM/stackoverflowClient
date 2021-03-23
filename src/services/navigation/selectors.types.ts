export interface IQueryParams {
  value: string;
  page: string;
  pageSize: string;
  [key: string]: string;
}

export interface IRouteLocation {
  pathname: string;
  search: string;
  hash: string;
  key: string,
  query: IQueryParams;
}
