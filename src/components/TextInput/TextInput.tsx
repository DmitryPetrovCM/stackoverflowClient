import React, {
  FunctionComponent,
  ReactElement,
  useState,
  useCallback,
} from 'react';
import classNames from 'classnames';
import ownStyles from './TextInput.module.scss';

interface ITextInputProps {
  style?: React.CSSProperties;
  className?: string;
  value: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

const TextInput: FunctionComponent<ITextInputProps> = ({
  style,
  className,
  value,
  onChange,
  onBlur,
}): ReactElement => {
  const [inputValue, setValue] = useState(value);
  const handleChange = useCallback(
    (event) => {
      const currentValue = event?.target?.value || '';
      setValue(currentValue);

      if (onChange) {
        onChange(currentValue);
      }
    },
    [onChange],
  );
  const handleBlur = useCallback(() => {
    if (onBlur) {
      onBlur(inputValue);
    }
  }, [onBlur, inputValue]);

  return (
    <input
      style={style}
      className={classNames(ownStyles.input, className)}
      type="text"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default TextInput;
