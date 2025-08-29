import type { Co2, Country } from '@/components/Table/Table';
import './index.css';
import ButtonWidget from './Loader/Buttons/ButtonWidget';

export type ColumnProps = {
  text: string;
  scope?: string;
  co2?: Co2;
  code?: Country['iso_code'];

  setStatusWidget?: () => void;
};

export const Column = ({
  scope,
  text,
  code,
  co2,
  setStatusWidget,
}: ColumnProps) => {
  const defaultValue = 'N/A';
  const content =
    scope === 'col' ? (
      <th
        className="text-center text-nowrap text-2xl w-[50%] border relative "
        id={text === 'Country' || text === 'Population' ? 'header-table' : ''}
        scope={scope}
      >
        {text}
        {(text === 'Country' || text === 'Population') && (
          <ButtonWidget onClick={setStatusWidget} />
        )}
      </th>
    ) : (
      <>
        <th className="text-left  " scope="row">
          {text}
        </th>
        <td className="text-left ">{code ?? defaultValue}</td>
        <td className="text-left ">{co2?.population ?? defaultValue}</td>
        <td className="text-left ">{co2?.cement_co2 ?? defaultValue}</td>
        <td className="text-left ">
          {co2?.cement_co2_per_capita ?? defaultValue}
        </td>
      </>
    );

  return <>{content}</>;
};
