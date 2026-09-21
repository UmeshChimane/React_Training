import { useCallback, useState, memo } from "react";

const Row = memo(function Row({ item, onClick }) {
  return (
    <div>
      <span>Item {item}</span>

      <button onClick={() => onClick(item)}>
        Select
      </button>
    </div>
  );
});

function ReactMemoUseCallback() {
  const [selected, setSelected] = useState(null);

  const items = Array.from({ length: 10000 }, (_, index) => index + 1);

  const handleClick = useCallback((id) => {
    setSelected(id);
  }, []);

  return (
    <div>
      <h1>Rendering Performance Lab</h1>

      <p>Selected Item: {selected || "None"}</p>

      {items.map((item) => (
        <Row
          key={item}
          item={item}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default ReactMemoUseCallback;