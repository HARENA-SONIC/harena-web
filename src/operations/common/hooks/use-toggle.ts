import { useState } from 'react';

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    setValue,
    toggleValue: () => {
      setValue((prev) => !prev);
    },
  };
};
