import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, beforeEach } from "vitest";
import useLocalStorage from "../hooks/useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("returns the initial value when localStorage is empty", () => {
    const { result } = renderHook(() =>
      useLocalStorage("username", "Umesh")
    );

    expect(result.current[0]).toBe("Umesh");
  });

  test("returns the value stored in localStorage", () => {
    localStorage.setItem("username", JSON.stringify("Rahul"));

    const { result } = renderHook(() =>
      useLocalStorage("username", "Umesh")
    );

    expect(result.current[0]).toBe("Rahul");
  });

  test("updates the value and localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("username", "Umesh")
    );

    act(() => {
      result.current[1]("Rahul");
    });

    expect(result.current[0]).toBe("Rahul");

    expect(localStorage.getItem("username")).toBe(
      JSON.stringify("Rahul")
    );
  });
});