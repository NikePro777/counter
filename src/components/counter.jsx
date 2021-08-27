import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      <span className={getBageclasses()}>{formCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </>
  );
};

export default Counter;
