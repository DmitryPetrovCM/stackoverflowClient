import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { noop } from '../../utils';
import style from './Tag.module.scss';

interface ITagProps {
  className?: string;
  tag: string;
  onClick?: (tag: string) => void;
}

const Tag: FunctionComponent<ITagProps> = ({
  className,
  tag,
  onClick = noop,
}) => (
  <div className={classNames(style.tag, className)} onClick={() => onClick(tag)}>
    {tag}
  </div>
);

export default Tag;
