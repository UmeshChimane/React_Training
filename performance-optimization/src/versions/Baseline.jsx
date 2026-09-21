import { useState } from "react";

function Baseline() {
  const [selected, setSelected] = useState(null);

  const items = Array.from({ length: 10000 }, (_, index) => index + 1);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <div>
      <h1>Rendering Performance Lab</h1>

      <p>Selected Item: {selected || "None"}</p>

      <div>
        {items.map((item) => (
          <div key={item}>
            <span>Item {item}</span>

            <button onClick={() => handleClick(item)}>
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Baseline;