import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceDemo() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <h2>useDebounce</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type something..."
      />

      <p>Current Value: {search}</p>
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
}

export default DebounceDemo;