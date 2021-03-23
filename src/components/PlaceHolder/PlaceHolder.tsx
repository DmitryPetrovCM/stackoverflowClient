import React, { FunctionComponent } from 'react';
import style from './PlaceHolder.module.scss';

const PlaceHolder: FunctionComponent = ({ children }) => (
  <div className={style.container}>{children}</div>
);

export default PlaceHolder;
