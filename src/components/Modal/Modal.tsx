import React, { FunctionComponent, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { noop } from '../../utils';
import style from './Modal.module.scss';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const Modal: FunctionComponent<IModalProps> = ({
  className,
  isOpen,
  children,
  onOpen = noop,
  onClose = noop,
}) => {
  const onCloseHandle = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.pointerEvents = 'none';
      onOpen();
    } else {
      document.documentElement.style.pointerEvents = 'auto';
    }
  }, [isOpen, onOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={style.overlay} />
      <div className={classNames(className, style.container)}>
        <button type="button" className={style.closeButton} onClick={onCloseHandle}>X</button>
        <div className={style.contentContainer}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
