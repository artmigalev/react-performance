import { Row } from '@/utils/Row';
import type { TableState } from './Table';
import type { JSX } from 'react';

type TBodyProps = TableState;

const Tbody = ({ bodyProps }: { bodyProps: TBodyProps }): JSX.Element => {
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
export default Tbody;
