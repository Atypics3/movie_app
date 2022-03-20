import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // the code below runs as soon as the page (re)loads
  useEffect(() => {
    setCounter(100);
    // dependency array makes it only run once
  }, []);

  return (
    <div className="App">
      {/* increments counter on click */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      {/* decrements counter on click */}
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
