import React, { FunctionComponent, ReactElement } from 'react';
import LoaderAnimation from '../LoadingAnimation/LoadingAnimation';
import PlaceHolder from '../PlaceHolder/PlaceHolder';
import { NO_DATA } from '../../constants';

interface IFetchableContent {
  isEmpty: boolean;
  isPending: boolean;
  renderContent: () => ReactElement | null;
}

const FetchableContent: FunctionComponent<IFetchableContent> = ({
  isEmpty,
  isPending,
  renderContent,
}) => {
  if (isPending) {
    return <LoaderAnimation />;
  }

  if (isEmpty) {
    return <PlaceHolder>{NO_DATA}</PlaceHolder>;
  }

  return renderContent();
};

export default FetchableContent;
