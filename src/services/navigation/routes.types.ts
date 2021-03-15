import { ComponentType } from 'react';
import { ROUTE_CONFIGS, ROUTES_NAMES } from '../../constants/routeNames';

export interface IRoute {
  path: ROUTES_NAMES,
  component: ComponentType,
}

export type TRoutes = {
  [key in ROUTE_CONFIGS]: IRoute;
}
