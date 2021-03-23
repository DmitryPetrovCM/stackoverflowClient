import React, { FunctionComponent } from 'react';
import ListItem from './ListItem/ListItem';
import style from './AnswersList.module.scss';

interface IAnswerItem {
  id: number;
  authorName: string;
  score: number;
  answerBody: string;
}

interface IAnswersListProps {
  items: IAnswerItem[];
}

const AnswersList: FunctionComponent<IAnswersListProps> = ({ items }) => (
  <div className={style.container}>
    {items.map(({
      id, authorName, score, answerBody,
    }) => (
      <ListItem
        key={id}
        className={style.item}
        authorName={authorName}
        score={score}
        body={answerBody}
      />
    ))}
  </div>
);

export default AnswersList;
