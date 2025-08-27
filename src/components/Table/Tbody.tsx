import { Row } from '@/utils/Row';
import type { TableState } from './Table';

type TBodyProps = TableState;

export const Tbody = ({ bodyProps }: { bodyProps: TBodyProps }) => {
  console.log(bodyProps);

  const { ids, entities } = bodyProps;
  return (
    <tbody>
      {ids.map((country) => (
        <Row
          name={country}
          key={entities[country].iso_code}
          options={entities[country]}
        />
      ))}
    </tbody>
  );
};
