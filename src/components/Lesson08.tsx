import { useState } from "react";

const Lesson08 = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={(e) => console.log(e.target)} />
      <button onClick={() => setText(String(Math.random()))}>Click me</button>
    </>
  );
};

export default Lesson08;
