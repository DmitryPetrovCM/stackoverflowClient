import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IData } from '../../components/Table/Table';
import SearchTable from '../../components/SearchTable/SearchTable';
import { goTo } from '../../services/navigation/actions';
import { MAIN_SEARCH_TABLE_TITLES } from '../../constants';
import { ROUTES_NAMES } from '../../constants/routeNames';
import { ROUTES_STATES } from '../../constants/routesStates';
import {
  setExpressPanelPageNumber, setExpressPanelPageSize, showTagPopularQuestions,
} from '../../services/expressPanel/actions';
import { SEARCH_TABLE_PROPERTIES } from '../../common/types';
import {
  getExpressPanelPageNumber,
  getExpressPanelPagesCount,
  getExpressPanelPageSize,
  getExpressPanelTableItems,
} from '../../services/expressPanel/selectors';
import Tag from '../../components/Tag/Tag';

const ExpressPanel: FunctionComponent = () => {
  const dispatch = useDispatch();
  const responseItems = useSelector(getExpressPanelTableItems);
  const currentPage = useSelector(getExpressPanelPageNumber);
  const pagesCount = useSelector(getExpressPanelPagesCount);
  const pageSize = useSelector(getExpressPanelPageSize);
  const onPageSizeChangeHandle = useCallback(
    (value: number | string) => {
      dispatch(setExpressPanelPageSize(value as number));
    },
    [dispatch],
  );
  const onPageChangeHandle = useCallback(
    (pageNumber: number) => {
      dispatch(setExpressPanelPageNumber(pageNumber as number));
    },
    [dispatch],
  );

  const goToQuestionInfo = useCallback(
    (data: IData) => {
      dispatch(goTo(ROUTES_NAMES.ANSWERS, { [ROUTES_STATES.ANSWERS.id]: data.questionId }));
    },
    [dispatch],
  );

  const renderTags = useCallback((tags: string[]) => (
    tags.map((tag) => (
      <Tag tag={tag} onClick={() => dispatch(showTagPopularQuestions(tag))} />
    ))
  ), [dispatch]);

  const columnsConfig = useMemo(
    () => [
      {
        title: MAIN_SEARCH_TABLE_TITLES.AUTHOR,
        renderValue: ({ [SEARCH_TABLE_PROPERTIES.AUTHOR]: author }: any): string => author?.name,
      },

      {
        title: MAIN_SEARCH_TABLE_TITLES.ANSWERS_COUNT,
        renderValue: ({ [SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: answersCount }: any): number => (
          answersCount
        ),
        onClick: goToQuestionInfo,
      },

      {
        title: MAIN_SEARCH_TABLE_TITLES.TAGS,
        renderValue: ({ [SEARCH_TABLE_PROPERTIES.TAGS]: tags }: any) => renderTags(tags),
      },

      {
        title: MAIN_SEARCH_TABLE_TITLES.QUESTION,
        renderValue: ({ [SEARCH_TABLE_PROPERTIES.TITLE]: title }: any): string => title,
        onClick: goToQuestionInfo,
      },
    ],
    [renderTags, goToQuestionInfo],
  );
  const tableProps = useMemo(
    () => ({
      data: responseItems,
      columnsConfig,
    }),
    [responseItems, columnsConfig],
  );

  return (
    <SearchTable
      table={tableProps}
      page={currentPage}
      pagesCount={pagesCount}
      pageSize={pageSize}
      onPageChange={onPageChangeHandle}
      onPageSizeChange={onPageSizeChangeHandle}
    />
  );
};

export default ExpressPanel;
