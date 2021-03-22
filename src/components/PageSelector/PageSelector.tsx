import _ from 'lodash';
import React, {
  FunctionComponent, ReactElement, useCallback, useMemo,
} from 'react';
import classNames from 'classnames';
import PageBadge from './PageBadge/PageBadge';
import style from './PageSelector.module.scss';

interface IPageSelectorProps {
  className?: string;
  pagesCount: number;
  currentPage: number;
  maxDisplayedPagesCount?: number;
  onPageClick: (page: number) => void;
}

const EDGE_PAGES_COUNT = 2;

const PageSelector: FunctionComponent<IPageSelectorProps> = ({
  className = '',
  pagesCount,
  currentPage,
  maxDisplayedPagesCount = 9,
  onPageClick,
}): ReactElement => {
  const restPages = useMemo(
    () => new Array(pagesCount - EDGE_PAGES_COUNT)
      .fill(undefined)
      .map((item, index) => index + EDGE_PAGES_COUNT),
    [pagesCount],
  );
  const dynamicPageBadgesCount = useMemo(() => maxDisplayedPagesCount - EDGE_PAGES_COUNT, [
    maxDisplayedPagesCount,
  ]);
  const dynamicPageBadgesHalf = useMemo(() => (dynamicPageBadgesCount - 1) / 2, [
    dynamicPageBadgesCount,
  ]);

  const restVisiblePages = useMemo(() => {
    if (pagesCount <= maxDisplayedPagesCount) {
      return restPages;
    }

    let start = restPages.indexOf(currentPage) - dynamicPageBadgesHalf;
    let end = start + dynamicPageBadgesCount;
    const leftDiff = currentPage - dynamicPageBadgesHalf;
    const rightDiff = currentPage + dynamicPageBadgesHalf;

    if (leftDiff <= 1) {
      start = 0;
      end = dynamicPageBadgesCount;
    } else if (rightDiff >= pagesCount - 1) {
      start = restPages.length - dynamicPageBadgesCount;
      end = start + dynamicPageBadgesCount;
    }

    return restPages.slice(start, end);
  }, [
    currentPage,
    dynamicPageBadgesCount,
    dynamicPageBadgesHalf,
    maxDisplayedPagesCount,
    pagesCount,
    restPages,
  ]);

  const renderRestPages = useCallback(() => restVisiblePages.map((pageNumber) => (
    <PageBadge
      selected={currentPage === pageNumber}
      pageNumber={pageNumber}
      onClick={onPageClick}
    />
  )), [currentPage, restVisiblePages, onPageClick]);

  const isLeftGapNeeded = useMemo(
    () => Boolean(restVisiblePages.length) && restVisiblePages[0] - 1 > 1,
    [restVisiblePages],
  );

  const isRightGapNeeded = useMemo(
    () => (
      Boolean(restVisiblePages.length) && pagesCount - (_.last(restVisiblePages) || pagesCount) > 1
    ),
    [restVisiblePages, pagesCount],
  );

  const renderGap = useCallback(() => <div className={style.gap}>...</div>, []);

  return (
    <div className={classNames(style.container, className)}>
      <PageBadge selected={currentPage === 1} pageNumber={1} onClick={onPageClick} />
      {isLeftGapNeeded && renderGap()}
      {renderRestPages()}
      {isRightGapNeeded && renderGap()}
      <PageBadge
        selected={currentPage === pagesCount}
        pageNumber={pagesCount}
        onClick={onPageClick}
      />
    </div>
  );
};

export default PageSelector;
