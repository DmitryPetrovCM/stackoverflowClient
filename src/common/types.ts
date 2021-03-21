import { Action } from 'redux';

export enum SEARCH_SORT {
  ACTIVITY = 'activity',
  CREATION = 'creation',
  VOTES = 'votes',
  RELEVANCE = 'relevance',
}

export interface IFetchAction extends Action {
  type: string;
  request: {
    url: string;
    method: string;
    params: {
      [key: string]: string | number | boolean;
    }
  }
}

export interface ISearchParams {
  sort?: SEARCH_SORT;
  pagesize?: number;
  page?: number;
}

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

export enum SEARCH_TABLE_PROPERTIES {
  AUTHOR = 'author',
  TAGS = 'tags',
  ANSWERS_COUNT = 'answersCount',
  TITLE = 'title',
}

export interface ITableSearchItem {
  [SEARCH_TABLE_PROPERTIES.AUTHOR]: {
    id: number;
    name: string;
  };
  [SEARCH_TABLE_PROPERTIES.TAGS]: string[];
  [SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: number;
  [SEARCH_TABLE_PROPERTIES.TITLE]: string;
  questionId: number;
}
