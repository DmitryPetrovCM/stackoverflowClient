import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { search, setSearchValue } from '../../services/search/actions';
import { getSearchString } from '../../services/search/selectors';
import styles from './Header.module.scss';

const Header: FunctionComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const searchString = useSelector(getSearchString);
  const handleSubmit = useCallback(() => dispatch(search()), [dispatch]);
  const handleInputBlur = useCallback((value: string) => dispatch(setSearchValue(value)), [
    dispatch,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.actionContainer}>
        <SearchPanel value={searchString} onSubmit={handleSubmit} onInputBlur={handleInputBlur} />
      </div>
    </div>
  );
};

export default Header;
