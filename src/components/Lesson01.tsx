import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

// components
import Button from "./Button.tsx";

function Lesson01() {
  const [count, setCount] = useState(() => {
    console.log("inside useState");
    return 0;
  });

  useEffect(() => {
    console.log("inside useEffect");
    document.title = `${count}`;
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello world</h1>
      <div className="card">
        <Button
          label="count is"
          badge={console.log("rendering JSX") || count}
          clickHandler={() => setCount((count) => count + 1)}
          severity="secondary"
        />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Lesson01;
