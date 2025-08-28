import type { Country } from '@/components/Table/Table';
import './index.css';

import { Column } from './Column';

type CountryName = string;

// type RowProps = {  scope: string, nameCountry: CountryName, popsize:  Co2['population'], code: Country['iso_cod'] };

export const Row = ({
  name,
  options,
}: {
  name: CountryName;

  options: Country;
}) => {
  const { iso_code, data } = options;
  const lastYear = data[data.length - 1];

  return (
    <tr>
      <Column text={name} code={iso_code} co2={lastYear} scope="row" />
    </tr>
  );
};
