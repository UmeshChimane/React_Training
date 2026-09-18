import useFetch from "../hooks/useFetch";

function FetchDemo() {
  const {
    data,
    loading,
    error
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>useFetch</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <div>
          {data.map((user) => (
            <p key={user.id}>
              {user.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchDemo;