import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import reduxRequestsConfig from './configureReduxRequests';

const saga = createSagaMiddleware();
const composeWithDevTools = (process.env.NODE_ENV === 'development'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const enhancer = composeWithDevTools(
  applyMiddleware(saga, thunk, ...reduxRequestsConfig.requestsMiddleware),
);

const store = createStore(rootReducer, enhancer);

saga.run(rootSaga);

export default store;
