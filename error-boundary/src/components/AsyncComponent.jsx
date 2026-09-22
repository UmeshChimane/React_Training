import { useState } from "react";

function AsyncComponent() {
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://invalid-api-example.com/data"
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      // We catch the async error here
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Async Error Example</h2>

      <button onClick={fetchData}>
        Fetch Data
      </button>

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default AsyncComponent;