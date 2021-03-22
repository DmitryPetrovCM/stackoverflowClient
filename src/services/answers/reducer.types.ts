/* eslint-disable camelcase */
export interface IAnswersResponseItem {
  owner: {
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate: number;
    profile_image: string;
    display_name: string;
    link: string;
  };
  is_accepted: boolean;
  score: number;
  last_activity_date: number;
  last_edit_date: number;
  creation_date: number;
  answer_id: number;
  question_id: number;
  content_license: string;
  body: string;
}

export interface IAnswersResponseData {
  items: IAnswersResponseItem[];
  has_more?: boolean;
  quota_max?: number;
  quota_remaining?: number;
}
/* eslint-enable camelcase */

export interface IAnswersState {
  isPending: boolean;
  data: IAnswersResponseData;
}
