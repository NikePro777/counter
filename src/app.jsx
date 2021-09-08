import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
function App() {
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
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
