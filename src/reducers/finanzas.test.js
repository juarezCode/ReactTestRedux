import reducer, { agregar, eliminar } from "./finanzas";

describe("Finanzas Duck reducer", () => {
  describe("action creators", () => {
    it("agregar", () => {
      const result = agregar(1);
      expect(result).toEqual({ type: "AGREGAR", payload: 1 });
    });

    it("eliminar", () => {
      const result = eliminar(1);
      expect(result).toEqual({ type: "ELIMINAR", index: 1 });
    });
  });

  describe("reducer", () => {
    it("AGREGAR", () => {
      const result = reducer([1], { type: "AGREGAR", payload: 2 });

      expect(result).toEqual([1, 2]);
    });

    it("ELIMINAR", () => {
      const result = reducer([1, 2], { type: "ELIMINAR", index: 0 });

      expect(result).toEqual([2]);
    });

    it("DEFAULT", () => {
      const result = reducer(10, { type: "DEFAULT" });

      expect(result).toEqual(10);
    });
  });
});
