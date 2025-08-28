import { lazy, Suspense, useEffect, useState, type JSX } from 'react';
import { Thead } from './Theader';
import axios, { type AxiosResponse } from 'axios';
// import { Tbody } from './Tbody';
import './index.css';
import Loader from '@/utils/Loader/Loader';
import delayForDemo from '@/app/functions/functions';
const dataJson = 'data/owid-co2-data.json';

export type Co2 = {
  year?: number;
  population?: number;
  cement_co2?: number;
  cement_co2_per_capita?: number;
  cumulative_cement_co2?: number;
};

export interface Country {
  iso_code: string;
  data: Co2[];
}
export type DataTable = {
  [key: string]: Country;
};
type Ids = string[];
export type TableState = {
  ids: Ids;
  entities: DataTable;
};
const Tbody = lazy(() => delayForDemo(import('./Tbody')));
export const Table = (): JSX.Element => {
  const [dataTable, setDataTable] = useState<TableState>({
    ids: [],
    entities: {},
  });

  useEffect(() => {
    axios.get(dataJson).then((resp: AxiosResponse<DataTable>) => {
      const ids: Ids = Object.keys(resp.data);
      const entities = resp.data;
      console.log(entities);

      setDataTable({ ids: ids, entities: entities });
    });
  }, [setDataTable]);

  return (
    <table className="w-[100%]">
      <caption className="text-2xl font-bold p-1">
        CO2 emissions data by countries
      </caption>
      <Thead />

      <Suspense fallback={<Loader />}>
        <Tbody bodyProps={dataTable} />
      </Suspense>
      <tfoot></tfoot>
    </table>
  );
};
