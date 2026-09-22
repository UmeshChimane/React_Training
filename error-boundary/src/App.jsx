import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import AsyncComponent from "./components/AsyncComponent";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  const [shouldThrow, setShouldThrow] = useState(true);

  return (
    <div>
      <h1>Error Boundary Example</h1>

      <ErrorBoundary
        onRetry={() => setShouldThrow(false)}
      >
        <BuggyComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>

      <hr />

      <AsyncComponent />
    </div>
  );
}

export default App;