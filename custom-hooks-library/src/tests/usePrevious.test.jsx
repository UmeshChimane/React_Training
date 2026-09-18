import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import usePrevious from "../hooks/usePrevious";

function TestComponent() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

describe("usePrevious", () => {
  test("returns the previous value", () => {
    render(<TestComponent />);

    expect(screen.getByText("Current: 0")).toBeInTheDocument();
    expect(screen.getByText("Previous:")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Increase"));

    expect(screen.getByText("Current: 1")).toBeInTheDocument();
    expect(screen.getByText("Previous: 0")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Increase"));

    expect(screen.getByText("Current: 2")).toBeInTheDocument();
    expect(screen.getByText("Previous: 1")).toBeInTheDocument();
  });
});