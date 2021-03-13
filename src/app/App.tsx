import React, { FunctionComponent, ReactElement } from 'react';
import { Provider } from 'react-redux';
import Header from '../containers/Header/Header';
import store from './configureStore';
import style from './App.module.scss';

const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <div className={style.app}>
      <Header />
    </div>
  </Provider>
);

export default App;
