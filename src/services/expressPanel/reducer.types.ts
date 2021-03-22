import { ISearchResponseData } from '../../common/types';

export enum EXPRESS_PANEL_DATA_TYPE {
  AUTHOR = 'AUTHOR',
  TAGS = 'TAGS',
}

export type TExpressPanelDataType = EXPRESS_PANEL_DATA_TYPE | null

export type TExpressPanelEntityId = string | number

export interface IExpressPanelState {
  isOpened: boolean;
  isPending: boolean;
  dataType: EXPRESS_PANEL_DATA_TYPE | null;
  entityId: TExpressPanelEntityId;
  pageNumber: number;
  pageSize: number;
  data: ISearchResponseData;
}
