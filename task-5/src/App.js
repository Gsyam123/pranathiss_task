// App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./Components/Actions";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleAddData = () => {
    dispatch(addData(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h1>Redux Store Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddData}>Add Data</button>

      <div>
        <h2>Data in Redux Store:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
