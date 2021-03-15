import axios from 'axios';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios.create({
    baseURL: 'https://api.stackexchange.com/2.2/',
  })),
  onRequest: (request) => ({
    ...request,
    params: {
      ...request.params,
      site: 'stackoverflow',
    },
  }),
});

export default {
  requestsReducer,
  requestsMiddleware,
};
