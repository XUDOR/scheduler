import { useState } from "react";

const useVisualMode = (initialMode) => {
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    // If replace is true, replace the current mode
    if (replace) {
      setHistory((prevHistory) => [
        ...prevHistory.slice(0, prevHistory.length - 1),
        newMode,
      ]);
    } else {
      // Otherwise, add the new mode to the history
      setHistory((prevHistory) => [...prevHistory, newMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
    }
  };

  // Derive the current mode from the last item in history
  const mode = history[history.length - 1];

  return { mode, transition, back };
};

export default useVisualMode;
