import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswers } from '../../services/answers/actions';
import { getBuf } from '../../services/answers/selectors';
import AnswersList from '../../components/AnswersList/AnswersList';
import style from './Answers.module.scss';

const Answers: FunctionComponent = () => {
  const dispatch = useDispatch();
  const answers = useSelector(getBuf);

  useEffect(() => {
    dispatch(getAnswers());
  }, [dispatch]);

  if (answers.length) {
    return (
      <div className={style.page}>
        <div className={style.container}>
          <AnswersList items={answers} />
        </div>
      </div>
    );
  }

  return null;
};

export default Answers;
