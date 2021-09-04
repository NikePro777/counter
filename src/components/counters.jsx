import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { value: 0, id: 1, name: "Вилка" },
    { value: 0, id: 2, name: "Ложка" },
    { value: 0, id: 3, name: "Тарелка" },
  ]);

  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} value={counter.value} name={counter.name} />
      ))}
    </div>
  );
};

export default Counters;
