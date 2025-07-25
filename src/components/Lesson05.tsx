import { useState } from "react";

const Lesson05 = () => {
  const [text, setText] = useState();

  return (
    <>
      <h1>{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText(String(Math.random()))}>Click</button>
    </>
  );
};

export default Lesson05;
