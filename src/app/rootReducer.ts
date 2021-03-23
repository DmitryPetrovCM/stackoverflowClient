import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from '../services/search/reducer';
import answersReducer from '../services/answers/reducer';
import expressPanelReducer from '../services/expressPanel/reducer';
import { IRootState } from './rootReducer.types';

const createRootReducer = (history: any) => combineReducers<IRootState>({
  search: searchReducer,
  answers: answersReducer,
  expressPanel: expressPanelReducer,
  router: connectRouter(history),
});

export default createRootReducer;
