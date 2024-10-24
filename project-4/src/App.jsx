import React, { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);
  function handleToggle() {
    setisGameStarted((prev) => !prev);
  }
  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toggle={handleToggle} />}</>
  );
}

export default App;
