import { useState } from "react";
import { Timer } from "./components/timer";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Timer start={0} end={10} /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}
