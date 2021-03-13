import { combineReducers } from 'redux';
import reduxRequestsConfig from './configureReduxRequests';
import searchReducer from '../services/search/reducer';
import { IRootState } from './rootReducer.types';

const rootReducer = combineReducers<IRootState>({
  search: searchReducer,
  requests: reduxRequestsConfig.requestsReducer,
});

export default rootReducer;
