import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import useMediaQuery from "../hooks/useMediaQuery";

describe("useMediaQuery", () => {
  let listeners = [];
  let mediaQuery;

  beforeEach(() => {
    listeners = [];

    mediaQuery = {
      matches: false,

      addEventListener: vi.fn((event, callback) => {
        listeners.push(callback);
      }),

      removeEventListener: vi.fn((event, callback) => {
        listeners = listeners.filter(
          (listener) => listener !== callback
        );
      }),
    };

    window.matchMedia = vi.fn(() => mediaQuery);
  });

  test("returns false when media query does not match", () => {
    const { result } = renderHook(() =>
      useMediaQuery("(max-width: 768px)")
    );

    expect(result.current).toBe(false);
  });

  test("returns true when media query matches", () => {
    mediaQuery.matches = true;

    const { result } = renderHook(() =>
      useMediaQuery("(max-width: 768px)")
    );

    expect(result.current).toBe(true);
  });

  test("updates when media query changes", () => {
    const { result } = renderHook(() =>
      useMediaQuery("(max-width: 768px)")
    );

    expect(result.current).toBe(false);

    act(() => {
      listeners.forEach((listener) => {
        listener({ matches: true });
      });
    });

    expect(result.current).toBe(true);
  });

  test("removes event listener when unmounted", () => {
    const { unmount } = renderHook(() =>
      useMediaQuery("(max-width: 768px)")
    );

    expect(mediaQuery.addEventListener).toHaveBeenCalled();

    unmount();

    expect(mediaQuery.removeEventListener).toHaveBeenCalled();
  });
});