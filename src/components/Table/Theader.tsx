import { Column } from '@/utils/Column';
import { useState } from 'react';

export const Thead = () => {
  const [isOpenWidget, setOpen] = useState({ status: false });
  const header = ['Country', 'ISO', 'Population', ' CO₂ ', 'CO₂ personal'];
  const openWidget = () => {
    setOpen({ status: isOpenWidget.status ? false : true });
    console.log(isOpenWidget);
  };

  return (
    <thead>
      <tr className="bg-blue-900 text-amber-50 p-0.5">
        {header.map((head) => (
          <Column
            setStatusWidget={openWidget}
            key={head}
            scope="col"
            text={head}
          />
        ))}
      </tr>
    </thead>
  );
};
