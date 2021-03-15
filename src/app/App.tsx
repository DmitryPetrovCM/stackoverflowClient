import React, { FunctionComponent, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import Header from '../containers/Header/Header';
import configureStore, { history } from './configureStore';
import ROUTES from '../services/navigation/routes';
import style from './App.module.scss';

const store = configureStore();

const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={style.app}>
        <Header />
        <Switch>
          <Route path={ROUTES.SEARCH_RESULT.path} component={ROUTES.SEARCH_RESULT.component} />
          <Route path={ROUTES.ANSWERS.path} component={ROUTES.ANSWERS.component} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
