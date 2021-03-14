import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import reduxRequestsConfig from './configureReduxRequests';

export const history = createBrowserHistory();

export default function configureStore() {
  const saga = createSagaMiddleware();
  const composeWithDevTools = (process.env.NODE_ENV === 'development'
    && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

  const enhancer = composeWithDevTools(
    applyMiddleware(
      saga,
      thunk,
      routerMiddleware(history),
      ...reduxRequestsConfig.requestsMiddleware,
    ),
  );

  const store = createStore(createRootReducer(history), enhancer);

  saga.run(rootSaga);

  return store;
}
