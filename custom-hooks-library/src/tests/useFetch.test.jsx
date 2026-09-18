import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, beforeEach, afterEach, vi } from "vitest";
import useFetch from "../hooks/useFetch";

describe("useFetch", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("starts with loading state", () => {
    globalThis.fetch.mockReturnValue(
      new Promise(() => {})
    );

    const { result } = renderHook(() =>
      useFetch("https://example.com/api")
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  test("returns data when fetch is successful", async () => {
    globalThis.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        id: 1,
        name: "Umesh",
      }),
    });

    const { result } = renderHook(() =>
      useFetch("https://example.com/api")
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual({
      id: 1,
      name: "Umesh",
    });

    expect(result.current.error).toBe(null);
  });

  test("returns error when fetch fails", async () => {
    globalThis.fetch.mockRejectedValue(
      new Error("Network error")
    );

    const { result } = renderHook(() =>
      useFetch("https://example.com/api")
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Network error");
    expect(result.current.data).toBe(null);
  });

  test("returns error when response is not ok", async () => {
    globalThis.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    const { result } = renderHook(() =>
      useFetch("https://example.com/api")
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Failed to fetch data");
  });

  test("cancels the request when hook is unmounted", () => {
  let receivedSignal;

  globalThis.fetch.mockImplementation((url, options) => {
    receivedSignal = options.signal;

    return new Promise(() => {});
  });

  const { unmount } = renderHook(() =>
    useFetch("https://example.com/api")
  );

  expect(receivedSignal).toBeDefined();
  expect(receivedSignal.aborted).toBe(false);

  unmount();

  expect(receivedSignal.aborted).toBe(true);
});
});