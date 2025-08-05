import "./App.css";

// routing
import { Link, Routes, Route } from "react-router";

// components
import Lesson01 from "./components/Lesson01.tsx";
import Lesson02 from "./components/Lesson02.tsx";
import Lesson03 from "./components/Lesson03.tsx";
import Lesson04 from "./components/Lesson04.tsx";
import Lesson05 from "./components/Lesson05.tsx";
import Lesson06 from "./components/Lesson06.tsx";
import Lesson07 from "./components/Lesson07.tsx";
import Lesson08 from "./components/Lesson08.tsx";
import Lesson09 from "./components/Lesson09.tsx";
import Lesson10 from "./components/Lesson10.tsx";
import Lesson11 from "./components/Lesson11.tsx";
import Lesson12 from "./components/Lesson12.tsx";
import Lesson13 from "./components/Lesson13.tsx";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="lesson01">Lesson 01</Link>
        <Link to="lesson02">Lesson 02</Link>
      </nav>
      {/* ["/lesson01", /lesson02] */}
      <Routes>
        <Route path="/lesson01" element={<Lesson01 />} />
        <Route path="/lesson02" element={<Lesson02 />} />
      </Routes>

      {/* <Lesson01 /> */}
      {/* <Lesson02 /> */}
      {/* <Lesson03 /> */}
      {/* <Lesson04 /> */}
      {/* <Lesson05 /> */}
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Lesson12 /> */}
      <Lesson13 />
    </>
  );
}

export default App;
