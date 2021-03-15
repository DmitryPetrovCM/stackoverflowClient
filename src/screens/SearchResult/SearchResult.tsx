import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SearchTable from '../../containers/SearchTable/SearchTable';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import { changePageSize } from '../../services/search/actions';
import { PAGE_SIZES } from '../../constants';

const SearchResult: FunctionComponent = () => {
  const dispatch = useDispatch();
  const onPageSizeChangeHandle = useCallback((value: number | string) => {
    dispatch(changePageSize(value as number));
  }, [dispatch]);

  return (
    <>
      <DropDownMenu items={PAGE_SIZES} onChange={onPageSizeChangeHandle} />
      <SearchTable />
    </>
  );
};

export default SearchResult;
