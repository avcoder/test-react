import Nav2 from "./Nav2";
import { useState } from "react";

const Lesson07 = () => {
  const [city, setCity] = useState("-");

  return (
    <>
      <h1>{city}</h1>
      <Nav2 onSelectCity={setCity} />
    </>
  );
};

export default Lesson07;
