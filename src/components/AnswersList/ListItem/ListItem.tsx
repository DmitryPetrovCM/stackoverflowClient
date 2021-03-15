import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import style from './ListItem.module.scss';

interface IListItemProps {
  className?: string;
  authorName: string;
  score: number;
  body: string;
}

const ListItem: FunctionComponent<IListItemProps> = ({
  className,
  authorName,
  score,
  body,
}) => (
  <div className={classNames(style.container, className)}>
    <div className={style.authorContainer}>{authorName}</div>
    <div className={style.body}>
      <div className={style.scoreContainer}>{score}</div>
      <div className={style.answerContainer}>
        <ReactMarkdown allowDangerousHtml>{body}</ReactMarkdown>
      </div>
    </div>
  </div>
);

export default ListItem;
