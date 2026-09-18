import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, beforeEach, afterEach, vi } from "vitest";
import useDebounce from "../hooks/useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("returns the updated value after the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: {
          value: "Hello",
          delay: 500,
        },
      }
    );

    expect(result.current).toBe("Hello");

    rerender({
      value: "Hello World",
      delay: 500,
    });

    // Value should not change immediately
    expect(result.current).toBe("Hello");

    // Move time forward by 500ms
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("Hello World");
  });

  test("cancels the previous timer when value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: {
          value: "A",
          delay: 500,
        },
      }
    );

    rerender({
      value: "AB",
      delay: 500,
    });

    // Only 300ms passed
    act(() => {
      vi.advanceTimersByTime(300);
    });

    rerender({
      value: "ABC",
      delay: 500,
    });

    // Move another 300ms
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // "AB" timer should have been cancelled
    expect(result.current).toBe("A");

    // Complete the new 500ms timer
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current).toBe("ABC");
  });
});