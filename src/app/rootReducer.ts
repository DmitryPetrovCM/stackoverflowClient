import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reduxRequestsConfig from './configureReduxRequests';
import searchReducer from '../services/search/reducer';
import answersReducer from '../services/answers/reducer';
import { IRootState } from './rootReducer.types';

const createRootReducer = (history: any) => combineReducers<IRootState>({
  search: searchReducer,
  answers: answersReducer,
  requests: reduxRequestsConfig.requestsReducer,
  router: connectRouter(history),
});

export default createRootReducer;
