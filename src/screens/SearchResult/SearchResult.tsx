import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import { getURLSearchString } from '../../services/navigation/selectors';
import { getSearchTableItems } from '../../services/search/selectors';
import { searchFor, setSearchValue } from '../../services/search/actions';
import { MAIN_SEARCH_TABLE_PROPERTIES } from '../../services/search/reducer.types';
import { MAIN_SEARCH_TABLE_TITLES } from '../../constants';

const SearchResult: FunctionComponent = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(getURLSearchString);
  const responseItems = useSelector(getSearchTableItems);
  const columnsConfig = useMemo(() => [
    {
      title: MAIN_SEARCH_TABLE_TITLES.AUTHOR,
      renderValue: ({ [MAIN_SEARCH_TABLE_PROPERTIES.AUTHOR]: author }: any): string => author.name,
      onClick: () => console.log('click'),
    },
    {
      title: MAIN_SEARCH_TABLE_TITLES.ANSWERS_COUNT,
      renderValue: ({ answersCount }: any): number => answersCount,
    },
    {
      title: MAIN_SEARCH_TABLE_TITLES.TAGS,
      renderValue: ({ tags }: any): string => tags[0],
    },
    {
      title: MAIN_SEARCH_TABLE_TITLES.QUESTION,
      renderValue: ({ title }: any): string => title,
    },
  ], []);

  useEffect(() => {
    dispatch(setSearchValue(searchString));
    dispatch(searchFor(searchString));
  }, [searchString, dispatch]);

  return (
    <Table data={responseItems} columnsConfig={columnsConfig} />
  );
};

export default SearchResult;
