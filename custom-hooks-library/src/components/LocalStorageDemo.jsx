import useLocalStorage from "../hooks/useLocalStorage";

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>useLocalStorage</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Stored Name: {name}</p>
    </div>
  );
}

export default LocalStorageDemo;