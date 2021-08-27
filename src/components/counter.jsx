import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = [];
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  return (
    <>
      {tags.length === 0 && "Теги не найдены"}
      {renderTags()}
      <span className={getBageclasses()}>{formCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </>
  );
};

export default Counter;
