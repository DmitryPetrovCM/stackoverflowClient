import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import Table, { IData } from '../../components/Table/Table';
import { getURLSearchString } from '../../services/navigation/selectors';
import { getSearchTableItems } from '../../services/search/selectors';
import { search } from '../../services/search/actions';
import { MAIN_SEARCH_TABLE_PROPERTIES } from '../../services/search/reducer.types';
import { MAIN_SEARCH_TABLE_TITLES } from '../../constants';
import { goTo } from '../../services/navigation/actions';
import { ROUTES_NAMES } from '../../constants/routeNames';
import { ROUTES_STATES } from '../../constants/routesStates';

const SearchTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  const responseItems = useSelector(getSearchTableItems);
  const searchURLString = useSelector(getURLSearchString);
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
            goTo(ROUTES_NAMES.ANSWERS, {
              search: queryString.stringify({ [ROUTES_STATES.ANSWERS.id]: data.questionId }),
            }),
          );
        },
      },
    ],
    [dispatch],
  );

  useEffect(() => {
    dispatch(search());
  }, [dispatch, searchURLString]);

  return <Table data={responseItems} columnsConfig={columnsConfig} />;
};

export default SearchTable;
