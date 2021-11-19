import { fetchUsuarios } from "./usuarios";

describe("Duck usuarios", () => {
  describe("fetchUsuarios", () => {
    it("Success", async () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const mockServices = {
        axios: {
          get: jest.fn().mockResolvedValue({
            data: 1,
          }),
        },
      };
      await fetchUsuarios()(mockDispatch, mockGetState, mockServices);

      expect(mockDispatch.mock.calls).toEqual([
        [{ type: "FETCH_USUARIOS_START", error: false }],
        [{ type: "FETCH_USUARIOS_SUCCESS", payload: 1 }],
      ]);
    });

    it("Error", async () => {
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn();
      const mockServices = {
        axios: {
          get: jest.fn().mockRejectedValue("error"),
        },
      };
      await fetchUsuarios()(mockDispatch, mockGetState, mockServices);

      expect(mockDispatch.mock.calls).toEqual([
        [{ type: "FETCH_USUARIOS_START", error: false }],
        [{ type: "FETCH_USUARIOS_ERROR", payload: "error", error: true }],
      ]);
    });
  });
});
