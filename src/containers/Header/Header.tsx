import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { setSearchValue } from '../../services/search/actions';
import { getSearchString } from '../../services/search/selectors';
import styles from './Header.module.scss';
import { goTo } from '../../services/navigation/actions';
import { ROUTES_NAMES } from '../../constants/routeNames';

const Header: FunctionComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const searchString = useSelector(getSearchString);
  const handleSubmit = useCallback(
    () => (
      dispatch(goTo(ROUTES_NAMES.SEARCH_RESULT, { value: searchString, page: 1, pageSize: 10 }))
    ),
    [searchString, dispatch],
  );
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
