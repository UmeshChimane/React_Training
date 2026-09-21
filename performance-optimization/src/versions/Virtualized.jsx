import { useCallback, useState, memo } from "react";
import { List } from "react-window";

const Row = memo(function Row({ index, style, items, onClick }) {
  const item = items[index];

  return (
    <div style={style}>
      <span>Item {item}</span>

      <button onClick={() => onClick(item)}>
        Select
      </button>
    </div>
  );
});

function Virtualized() {
  const [selected, setSelected] = useState(null);

  const items = Array.from({ length: 10000 }, (_, index) => index + 1);

  const handleClick = useCallback((id) => {
    setSelected(id);
  }, []);

  return (
    <div>
      <h1>Rendering Performance Lab</h1>

      <p>Selected Item: {selected || "None"}</p>

      <List
        rowCount={items.length}
        rowHeight={30}
        rowComponent={Row}
        rowProps={{
          items,
          onClick: handleClick,
        }}
        style={{
          height: 600,
          width: 500,
        }}
      />
    </div>
  );
}

export default Virtualized;