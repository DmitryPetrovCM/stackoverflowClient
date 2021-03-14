import { ComponentType } from 'react';
import { ROUTE_NAMES } from '../../constants/routeNames';

export interface IRoute {
  path: string,
  component: ComponentType,
}

export type TRoutes = {
  [key in ROUTE_NAMES]: IRoute;
}
