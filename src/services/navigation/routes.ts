import { ROUTE_NAMES } from '../../constants/routeNames';
import SearchResult from '../../screens/SearchResult/SearchResult';
import { TRoutes } from './routes.types';

const ROUTES: TRoutes = {
  [ROUTE_NAMES.SEARCH_RESULT]: {
    path: '/search',
    component: SearchResult,
  },
};

export default ROUTES;
