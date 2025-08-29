import type { DataTable } from '@/components/Table/Table';
import axios from 'axios';

export default function delayForDemo<T>(
  promise: Promise<{ default: T }>
): Promise<{ default: T }> {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export const getData = async (url: string): Promise<DataTable> => {
  const response = await axios(url);
  return response.data;
};
