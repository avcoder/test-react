import { useState } from "react";

function useToggle2(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // create a function that updates our value
  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
}

export default useToggle2;
