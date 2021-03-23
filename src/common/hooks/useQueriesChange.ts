/* eslint-disable */
import {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { getQueryParams } from '../../services/navigation/selectors';

const useQueriesChange = (queriesKeys: string[]) => {
  const queryParams = useSelector(getQueryParams);
};
