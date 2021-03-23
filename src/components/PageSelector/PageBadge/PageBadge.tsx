import React, { FunctionComponent, useCallback } from 'react';
import classNames from 'classnames';
import style from './PageBadge.module.scss';

interface IPageBadgeProps {
  className?: string;
  selected?: boolean;
  pageNumber: number;
  onClick: (pageNumber: number) => void;
}

const PageBadge: FunctionComponent<IPageBadgeProps> = ({
  className,
  selected = false,
  pageNumber,
  onClick,
}) => {
  const onClickHandle = useCallback(() => onClick(pageNumber), [onClick, pageNumber]);

  return (
    <div
      className={classNames(style.badge, selected && style.selected, className)}
      onClick={onClickHandle}
    >
      {pageNumber}
    </div>
  );
};

export default PageBadge;
