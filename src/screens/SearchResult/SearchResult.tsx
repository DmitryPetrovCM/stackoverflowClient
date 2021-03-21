import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchTableContainer from '../../containers/SearchTable/SearchTableContainer';
import Modal from '../../components/Modal/Modal';
import ExpressPanel from '../../containers/ExpressPanel/ExpressPanel';
import { getIsExpressPanelOpened } from '../../services/expressPanel/selectors';
import { hideExpressPanel } from '../../services/expressPanel/actions';

const SearchResult: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isExpressPanelOpened = useSelector(getIsExpressPanelOpened);
  const onCloseModalHandle = useCallback(() => dispatch(hideExpressPanel()), [dispatch]);

  return (
    <>
      <SearchTableContainer />
      <Modal isOpen={isExpressPanelOpened} onClose={onCloseModalHandle}>
        <ExpressPanel />
      </Modal>
    </>
  );
};

export default SearchResult;
