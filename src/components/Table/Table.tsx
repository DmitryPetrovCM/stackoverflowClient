import React, {
  FunctionComponent, ReactElement, useCallback, useMemo,
} from 'react';
import classNames from 'classnames';
import style from './Table.module.scss';

export interface IData {
  [key: string]: any;
}

interface IRenderRow {
  title: string;
  renderValue: (data: IData) => string | number | ReactElement | ReactElement[];
  onClick?: (value: IData[keyof IData]) => void;
}

export interface ITableProps {
  data: IData[];
  columnsConfig: IRenderRow[];
}

interface IRenderColumn {
  renderValue: () => string | number | ReactElement;
  onClick?: IRenderRow['onClick'];
}

// row:hover, column:hover

const Table: FunctionComponent<ITableProps> = ({ data = [], columnsConfig }) => {
  const columnWidth = useMemo(() => 100 / columnsConfig.length, [columnsConfig.length]);
  const getOnCeilClickHandle = useCallback(
    (item: IData, onClick?: (item: IData) => void) => {
      if (onClick && typeof onClick === 'function') {
        return () => {
          onClick(item);
        };
      }

      return undefined;
    },
    [],
  );

  const renderColumn = useCallback(
    ({ renderValue, onClick }: IRenderColumn, index: number) => {
      const className = classNames(style.ceil, { [style.clickable]: !!onClick });

      return (
        <div
          key={index}
          style={{ width: `${columnWidth}%` }}
          className={className}
          onClick={onClick}
        >
          {renderValue()}
        </div>
      );
    },
    [columnWidth],
  );

  const renderRow = useCallback(
    (dataItem) => {
      const columns = columnsConfig.map(
        ({ renderValue, onClick }: IRenderRow, index) => renderColumn(
          {
            // @ts-ignore
            renderValue: () => renderValue(dataItem),
            onClick: getOnCeilClickHandle(dataItem, onClick),
          },
          index,
        ),
      );

      return <div className={style.row}>{columns}</div>;
    },
    [columnsConfig, renderColumn, getOnCeilClickHandle],
  );

  const renderHeadersRow = useCallback(() => {
    const headerColumns = columnsConfig.map(
      ({ title }, index) => renderColumn({ renderValue: () => title }, index),
    );

    return <div className={classNames(style.row, style.headerRow)}>{headerColumns}</div>;
  }, [columnsConfig, renderColumn]);

  const renderRows = useCallback(() => data.map(renderRow), [data, renderRow]);

  return (
    <div className={style.container}>
      {renderHeadersRow()}
      {renderRows()}
    </div>
  );
};

export default Table;
