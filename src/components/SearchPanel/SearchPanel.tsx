import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { SEARCH_BUTTON_TITLE } from '../../constants';
import styles from './SearchPanel.module.scss';

interface ISearchPanelProps {
  className?: string;
  value: string;
  onSubmit: () => void;
  onInputBlur?: (value: string) => void;
}

const SearchPanel: FunctionComponent<ISearchPanelProps> = ({
  className,
  value,
  onSubmit,
  onInputBlur,
}): ReactElement => (
  <div className={classNames(styles.container, className)}>
    <TextInput className={styles.input} value={value} onBlur={onInputBlur} />
    <Button className={styles.button} onClick={onSubmit}>{SEARCH_BUTTON_TITLE}</Button>
  </div>
);

export default SearchPanel;
