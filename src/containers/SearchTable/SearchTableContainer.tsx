import React, {
  FunctionComponent, useCallback, useEffect, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IData } from '../../components/Table/Table';
import SearchTable from '../../components/SearchTable/SearchTable';
import { goTo } from '../../services/navigation/actions';
import { changePageSize, search, setPageNumber } from '../../services/search/actions';
import { MAIN_SEARCH_TABLE_PROPERTIES } from '../../services/search/reducer.types';
import { getQueryParams } from '../../services/navigation/selectors';
import {
  getCurrentPage, getPagesCount, getPageSize, getSearchTableItems,
} from '../../services/search/selectors';
import { MAIN_SEARCH_TABLE_TITLES } from '../../constants';
import { ROUTES_NAMES } from '../../constants/routeNames';
import { ROUTES_STATES } from '../../constants/routesStates';

const SearchTableContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const responseItems = useSelector(getSearchTableItems);
  const queryParams = useSelector(getQueryParams);
  const currentPage = useSelector(getCurrentPage);
  const pagesCount = useSelector(getPagesCount);
  const pageSize = useSelector(getPageSize);
  const onPageSizeChangeHandle = useCallback((value: number | string) => {
    dispatch(changePageSize(value as number));
  }, [dispatch]);
  const onPageChangeHandle = useCallback((pageNumber: number) => {
    dispatch(setPageNumber(pageNumber));
  }, [dispatch]);

  const columnsConfig = useMemo(
    () => [
      {
        title: MAIN_SEARCH_TABLE_TITLES.AUTHOR,
        renderValue: (
          { [MAIN_SEARCH_TABLE_PROPERTIES.AUTHOR]: author }: any,
        ): string => author.name,
        onClick: (data: IData) => console.log(data),
      },

      {
        title: MAIN_SEARCH_TABLE_TITLES.ANSWERS_COUNT,
        renderValue: (
          { [MAIN_SEARCH_TABLE_PROPERTIES.ANSWERS_COUNT]: answersCount }: any,
        ): number => answersCount,
      },

      {
        title: MAIN_SEARCH_TABLE_TITLES.TAGS,
        renderValue: (
          { [MAIN_SEARCH_TABLE_PROPERTIES.TAGS]: tags }: any,
        ): string => tags[0],
      },

      {
        title: MAIN_SEARCH_TABLE_TITLES.QUESTION,
        renderValue: (
          { [MAIN_SEARCH_TABLE_PROPERTIES.TITLE]: title }: any,
        ): string => title,
        onClick: (data: IData) => {
          dispatch(
            goTo(ROUTES_NAMES.ANSWERS, { [ROUTES_STATES.ANSWERS.id]: data.questionId }),
          );
        },
      },
    ],
    [dispatch],
  );
  const tableProps = useMemo(() => ({
    data: responseItems,
    columnsConfig,
  }), [responseItems, columnsConfig]);

  useEffect(() => {
    dispatch(search());
  }, [dispatch, queryParams]);

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

export default SearchTableContainer;
