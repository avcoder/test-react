import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // create function that updates our value var
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

export default useToggle;
