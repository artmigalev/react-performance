import { Column } from '@/utils/Column';

export const Thead = () => {
  const header = ['Country', 'ISO', 'Population', ' CO₂ ', 'CO₂ personal'];

  return (
    <thead>
      <tr className="bg-blue-900 text-amber-50">
        {header.map((head, index) => (
          <Column key={index} scope="col" text={head} />
        ))}
      </tr>
    </thead>
  );
};
