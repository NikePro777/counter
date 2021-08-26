import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  return (
    <>
      <span>{formCount()}</span>
      <button>Increment</button>
    </>
  );
};

export default Counter;
