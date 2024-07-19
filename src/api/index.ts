import axios from 'axios';
import axiosRetry from 'axios-retry';
import {config} from '../../config';

export type ResponseType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  message: string;
  status: number;
};

/**
 * @method networkRequest
 * @returns instance of axios
 */
export const networkRequest = () => {
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.authorizationToken}`,
    },
    baseURL: config.baseURL,
    timeout: 20000,
  });

  // Configure axiosRetry
  axiosRetry(axiosInstance, {
    retries: 3, // number of retries
    retryDelay: retryCount => {
      console.log(`Retry attempt: ${retryCount}`);
      return retryCount * 2000; // time interval between retries
    },
    retryCondition: error => {
      // Retry only if the error status is 503
      return error.response ? error.response.status === 503 : false;
    },
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      // Throw an error if the response status is not 200
      if (error.response && error.response.status !== 200) {
        throw new Error(
          `API call failed with status code: ${error.response.status} after 3 retry attempts`,
        );
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
