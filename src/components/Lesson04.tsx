import { useState } from "react";

// components
import Nav from "./Nav";

const Lesson04 = () => {
  const [city, setCity] = useState("");

  return (
    <>
      <Nav onCitySelect={setCity} />
      <h1>{city}</h1>
    </>
  );
};

export default Lesson04;
