import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Вилка" },
    { value: 0, id: 2, name: "Ложка" },
    { value: 0, id: 3, name: "Тарелка" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterID) => {
    const newCounters = counters.filter((c) => c.id !== counterID);
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const index = newCounters.findIndex((c) => c.id === counterId);
    if (newCounters[index].value !== 0) {
      newCounters[index].value--;
      setCounters(newCounters); // Мой код
    }
  };

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const index = newCounters.findIndex((c) => c.id === counterId);
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleReset = () => {
    console.log("yes");
    setCounters(initialState);
  };
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
