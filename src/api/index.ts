import axios from 'axios';
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
  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return error;
    },
  );

  return axiosInstance;
};
