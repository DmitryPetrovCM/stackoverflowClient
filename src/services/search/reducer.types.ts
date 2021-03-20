/* eslint-disable camelcase */
export interface ISearchResponseItem {
  owner: {
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate: number;
    profile_image: string;
    display_name: string;
    link: string;
  };
  tags: string[];
  is_answered: boolean;
  view_count: number;
  accepted_answer_id: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: number;
  link: string;
  title: string;
}

export interface ISearchResponseData {
  items: ISearchResponseItem[];
  page?: number;
  page_size?: number;
  total?: number;
  has_more?: boolean;
  quota_max?: number;
  quota_remaining?: number;
}
/* eslint-enable camelcase */

export interface ISearchState {
  searchValue: string;
  pageSize: number;
  data: ISearchResponseData;
}

export enum MAIN_SEARCH_TABLE_PROPERTIES {
  AUTHOR = 'author',
  TAGS = 'tags',
  ANSWERS_COUNT = 'answersCount',
  TITLE = 'title',
}

export interface ITableSearchItem {
  [MAIN_SEARCH_TABLE_PROPERTIES.AUTHOR]: {
    name: string;
    img: string;
  };
  [MAIN_SEARCH_TABLE_PROPERTIES.TAGS]: string[];
  [MAIN_SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: number;
  [MAIN_SEARCH_TABLE_PROPERTIES.TITLE]: string;
  questionId: number;
}
