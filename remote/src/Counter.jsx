import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button
        style={{ border: "1px solid gray" }}
        onClick={() => setCounter(counter + 1)}
      >
        Add
      </button>
    </div>
  );
}

export default Counter;
