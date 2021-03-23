import React, { FunctionComponent, useCallback, useState } from 'react';
import classNames from 'classnames';
import { noop } from '../../utils';
import style from './DropDownMenu.module.scss';

interface IDropDownMenuProps {
  className?: string;
  initialValueIndex?: number;
  items: string[] | number[];
  onChange?: (value: number | string, index: number) => void;
}

const DropDownMenu: FunctionComponent<IDropDownMenuProps> = ({
  className = '',
  initialValueIndex = 0,
  items = [],
  onChange = noop,
}) => {
  const [isExpanded, toggle] = useState<boolean>(false);
  const [currentValueIndex, setCurrentValueIndex] = useState<number>(initialValueIndex);
  const onClickHandle = useCallback(() => toggle(!isExpanded), [isExpanded]);
  const getOnItemClickHandle = useCallback((index: number) => () => {
    setCurrentValueIndex(index);
    onChange(items[index], index);
    toggle(false);
  }, [items, onChange]);

  const renderItems = useCallback(() => {
    const itemsViews = items.map((item: string | number, index: number) => (
      <div key={item} className={style.item} onClick={getOnItemClickHandle(index)}>
        {item}
      </div>
    ));

    return (
      <div className={style.itemsContainer} data-expanded={isExpanded}>
        {itemsViews}
      </div>
    );
  }, [items, getOnItemClickHandle, isExpanded]);

  return (
    <div className={classNames(style.container, className)} onClick={onClickHandle}>
      <div className={style.currentValue}>{items[currentValueIndex]}</div>
      {isExpanded && renderItems()}
    </div>
  );
};

export default DropDownMenu;
