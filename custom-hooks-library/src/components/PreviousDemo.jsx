import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function PreviousDemo() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <h2>usePrevious</h2>

      <p>Current Value: {count}</p>
      <p>Previous Value: {previousCount}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default PreviousDemo;