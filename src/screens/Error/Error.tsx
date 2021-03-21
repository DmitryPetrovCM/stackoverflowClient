import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';
import { OOPS } from '../../constants';
import { getQueryParams } from '../../services/navigation/selectors';

const ErrorScreen: FunctionComponent = () => {
  const { status, statusText } = useSelector(getQueryParams);

  return (
    <PlaceHolder>
      <div>{OOPS}</div>
      <div>
        error:&nbsp;
        {status}
      </div>
      <div>
        description:&nbsp;
        {statusText}
      </div>
    </PlaceHolder>
  );
};

export default ErrorScreen;
