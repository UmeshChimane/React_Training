import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, expect, test, vi, afterEach } from "vitest";
import { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function TestComponent({ handler }) {
  const boxRef = useRef();

  useOnClickOutside(boxRef, handler);

  return (
    <div>
      <div ref={boxRef} data-testid="box">
        Inside Box
      </div>

      <button data-testid="outside">
        Outside
      </button>
    </div>
  );
}

afterEach(() => {
  cleanup();
});

describe("useOnClickOutside", () => {
  test("calls handler when clicked outside", () => {
    const handler = vi.fn();

    const { getByTestId } = render(
      <TestComponent handler={handler} />
    );

    fireEvent.mouseDown(getByTestId("outside"));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("does not call handler when clicked inside", () => {
    const handler = vi.fn();

    const { getByTestId } = render(
      <TestComponent handler={handler} />
    );

    fireEvent.mouseDown(getByTestId("box"));

    expect(handler).not.toHaveBeenCalled();
  });

  test("removes event listener when component unmounts", () => {
  const handler = vi.fn();

  const { unmount } = render(
    <TestComponent handler={handler} />
  );

  unmount();

  fireEvent.mouseDown(document);

  expect(handler).not.toHaveBeenCalled();
});
});