import React, { FunctionComponent, ReactElement } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { SEARCH_BUTTON_TITLE } from '../../constants';
import ownStyles from './SearchPanel.module.scss';

interface ISearchPanelProps {
  style?: React.CSSProperties;
  value: string;
  onSubmit: () => void;
  onInputBlur: (value: string) => void;
}

const SearchPanel: FunctionComponent<ISearchPanelProps> = ({
  style,
  value,
  onSubmit,
  onInputBlur,
}): ReactElement => (
  <div className={classNames(ownStyles.container, style)}>
    <TextInput className={ownStyles.input} value={value} onBlur={onInputBlur} />
    <Button onClick={onSubmit}>{SEARCH_BUTTON_TITLE}</Button>
  </div>
);

export default SearchPanel;
