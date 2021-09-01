import React, { useState } from "react";
import Counter from "./counter";
import { useState } from "react";

const Counters = () => {
  const [counters, setCounters] = useState(
    { value: 0, id: 1 },
    { value: 0, id: 1 },
    { value: 0, id: 1 }
  );
  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} />
      ))}
    </div>
  );
};

export default Counters;
