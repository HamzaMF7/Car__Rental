import { useState } from "react";

export default function useToggle(
  defalutValue: boolean
): [boolean, (newValue?: boolean) => void] {
  const [value, setValue] = useState(defalutValue);

  function toggleValue(newValue?: boolean) {
    setValue((preValue) => (newValue !== undefined ? newValue : !preValue));
  }

  return [value, toggleValue];
}
