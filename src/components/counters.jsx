import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
