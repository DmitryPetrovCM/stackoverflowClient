import SearchResult from '../../screens/SearchResult/SearchResult';
import Answers from '../../screens/Answers/Answers';
import ErrorScreen from '../../screens/Error/Error';
import { ROUTE_CONFIGS, ROUTES_NAMES } from '../../constants/routeNames';
import { TRoutes } from './routes.types';

const ROUTES: TRoutes = {
  [ROUTE_CONFIGS.SEARCH_RESULT]: {
    path: ROUTES_NAMES.SEARCH_RESULT,
    component: SearchResult,
  },
  [ROUTE_CONFIGS.ANSWERS]: {
    path: ROUTES_NAMES.ANSWERS,
    component: Answers,
  },
  [ROUTE_CONFIGS.ERROR]: {
    path: ROUTES_NAMES.ERROR,
    component: ErrorScreen,
  },
};

export default ROUTES;
