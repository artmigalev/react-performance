import type { Co2, Country } from '@/components/Table/Table';
import './index.css';

export type ColumnProps = {
  text: string;
  scope?: string;
  co2?: Co2;
  code?: Country['iso_code'];
};

export const Column = ({ scope, text, code, co2 }: ColumnProps) => {
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
        <td className="text-center ">{co2?.population ?? 'N/A'}</td>
        <td className="text-center ">{code}</td>
      </>
    );

  return <>{content}</>;
};
