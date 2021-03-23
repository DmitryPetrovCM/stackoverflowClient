import React, { FunctionComponent } from 'react';
import { noop } from '../../../utils';

interface ICellProps {
  style?: React.CSSProperties;
  className: string;
  onClick?: (value: any) => void;
}

const Cell: FunctionComponent<ICellProps> = ({
  style,
  className,
  children,
  onClick = noop,
}) => (
  <div style={style} className={className} onClick={onClick}>
    {children}
  </div>
);

export default Cell;
