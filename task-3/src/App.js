import React, { useState, useMemo, useCallback } from "react";
import "./App.css"
const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    console.log("Processing data...");
    return data.map((item) => item * 2);
  }, [data]);

  return (
    <div>
      <h2>ExpensiveComponent</h2>
      <p>Processed Data: {processedData.join(", ")}</p>
    </div>
  );
};

const ClickHandlerComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2 className="click">ClickHandlerComponent</h2>
      <p className="count">Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

const App = () => {
  const data = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div>
      <h1>React Components with useMemo and useCallback</h1>
      <ExpensiveComponent data={data} />
      <ClickHandlerComponent />
    </div>
  );
};

export default App;
