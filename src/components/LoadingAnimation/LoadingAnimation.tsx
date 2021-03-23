import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import style from './LoadingAnimation.module.scss';

interface ILoadingAnimationProps {
  className?: string;
  description?: string | null;
}

const LoadingAnimation: FunctionComponent<ILoadingAnimationProps> = ({
  className,
  description = null,
}) => (
  <div className={classNames(style.container, className)}>
    <div className={style.circlesContainer}>
      <div className={style.circle} />
      <div className={style.circle} />
      <div className={style.circle} />
    </div>
    {description && <div className={style.description}>{description}</div>}
  </div>
);

export default LoadingAnimation;
