import { useState } from "react";

export const Counter = () => {
  const handleCLick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleCLick}>Increment</button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};
