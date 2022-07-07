import { act, renderHook } from "@testing-library/react-hooks";
import { useBoolean } from "./useBoolean";

describe("useBoolean()", () => {
  describe("initialize", () => {
    it("converts non-boolean values to boolean", () => {
      const [state] = renderHook(() => useBoolean(1 as unknown as boolean))
        .result.current;
      expect(state).toEqual(true);
    });

    it("converts a non-boolean function return to boolean", () => {
      const [state] = renderHook(() =>
        useBoolean(() => "some truthy value" as unknown as boolean)
      ).result.current;
      expect(state).toEqual(true);
    });

    it("default empty value to false", () => {
      const [state] = renderHook(() => useBoolean()).result.current;
      expect(state).toEqual(false);
    });

    it("starts with an initial value", () => {
      const [state] = renderHook(() => useBoolean(true)).result.current;
      expect(state).toEqual(true);
    });

    it("starts with initial value function", () => {
      const [state] = renderHook(() => useBoolean(() => true)).result.current;
      expect(state).toEqual(true);
    });
  });

  describe("set()", () => {
    it("sets new value", () => {
      const { result } = renderHook(() => useBoolean());

      expect(result.current[0]).toEqual(false);

      act(() => result.current[1].set(true));
      expect(result.current[0]).toEqual(true);

      act(() => result.current[1].set(false));
      expect(result.current[0]).toEqual(false);
    });
  });

  it("off() set state to false", () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current[0]).toEqual(true);

    act(() => result.current[1].off());

    expect(result.current[0]).toEqual(false);
  });

  it("on() set state to true", () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current[0]).toEqual(false);

    act(() => result.current[1].on());

    expect(result.current[0]).toEqual(true);
  });

  it("toggle() switch true/false values", () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current[0]).toEqual(false);

    act(() => result.current[1].toggle());

    expect(result.current[0]).toEqual(true);

    act(() => result.current[1].toggle());

    expect(result.current[0]).toEqual(false);
  });
});
