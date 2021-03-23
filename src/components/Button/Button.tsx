import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import ownStyle from './Button.module.scss';

interface IButtonProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactChild;
  onClick: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({
  style,
  className,
  children,
  onClick,
}): ReactElement => (
  <button type="button" style={style} className={classNames(ownStyle.button, className)} onClick={onClick}>
    {children}
  </button>
);

export default Button;
