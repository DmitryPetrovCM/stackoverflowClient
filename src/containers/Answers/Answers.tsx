import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnswersList from '../../components/AnswersList/AnswersList';
import FetchableContent from '../../components/FetchableContent/FetchableContent';
import { getAnswers } from '../../services/answers/actions';
import {
  getAnswers as getAnswersSelector,
  getIsAnswersDataPending,
} from '../../services/answers/selectors';
import style from './Answers.module.scss';

const Answers: FunctionComponent = () => {
  const dispatch = useDispatch();
  const answers = useSelector(getAnswersSelector);
  const isDataPending = useSelector(getIsAnswersDataPending);
  const isEmpty = !useMemo(() => Boolean(answers.length), [answers]);

  const renderContent = useCallback(
    () => (
      <div className={style.page}>
        <div className={style.container}>
          <AnswersList items={answers} />
        </div>
      </div>
    ),
    [answers],
  );

  useEffect(() => {
    dispatch(getAnswers());
  }, [dispatch]);

  return (
    <FetchableContent
      isEmpty={isEmpty}
      isPending={isDataPending}
      renderContent={renderContent}
    />
  );
};

export default Answers;
