import type { Co2, Country } from '@/components/Table/Table';
import './index.css';

export type ColumnProps = {
  text: string;
  scope?: string;
  co2?: Co2;
  code?: Country['iso_code'];
};

export const Column = ({ scope, text, code, co2 }: ColumnProps) => {
  const defaultValue = 'N/A';
  const content =
    scope === 'col' ? (
      <th
        className="text-center text-nowrap text-2xl w-[50%] border"
        scope={scope}
      >
        {text}
      </th>
    ) : (
      <>
        <th className="text-center  " scope="row">
          {text}
        </th>
        <td className="text-center ">{code ?? defaultValue}</td>
        <td className="text-center ">{co2?.population ?? defaultValue}</td>
        <td className="text-center ">{co2?.cement_co2 ?? defaultValue}</td>
        <td className="text-center ">
          {co2?.cement_co2_per_capita ?? defaultValue}
        </td>
      </>
    );

  return <>{content}</>;
};
