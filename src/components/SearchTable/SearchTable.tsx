import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import PageSelector from '../PageSelector/PageSelector';
import Table, { ITableProps } from '../Table/Table';
import { PAGE_SIZES } from '../../constants';

interface ISearchTableProps {
  table: ITableProps;
  page: number;
  pagesCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (value: number | string, index: number) => void;
}

const SearchResult: FunctionComponent<ISearchTableProps> = ({
  table,
  page,
  pagesCount,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <DropDownMenu
        items={PAGE_SIZES}
        initialValueIndex={_.indexOf(PAGE_SIZES, pageSize)}
        onChange={onPageSizeChange}
      />
      {pagesCount > 1 && (
        <PageSelector pagesCount={pagesCount} currentPage={page} onPageClick={onPageChange} />
      )}
    </div>
    <Table data={table.data} columnsConfig={table.columnsConfig} />
  </>
);

export default SearchResult;
