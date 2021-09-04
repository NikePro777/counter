import React, { useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(props.value);

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      console.log("тут не откуда вычитать");
    }
  };
  return (
    <>
      <h4>{props.name}</h4>
      <span className={getBageclasses()}>{formValue()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary m-2 btn-sm"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="btn btn-secondary m-2 btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
