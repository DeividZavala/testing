import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, {
  getTodos,
  loadingTodos,
  getTodosSuccess,
  getTodosError,
} from "../TodosDuck";
import mockAxios from "axios";

const mockStore = createMockStore([thunk]);

describe("todos actions creators", () => {
  it("should handle success action", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: [{ id: 1, name: "test" }] })
    );
    const store = mockStore();
    await store.dispatch(getTodos());
    const actions = store.getActions();
    const expectedActions = [
      { type: "irontodos/todos/LOADING" },
      {
        type: "irontodos/todos/GET_TODOS_SUCCESS",
        payload: [{ id: 1, name: "test" }],
      },
    ];
    expect(actions).toEqual(expectedActions);
  });
  it("should handle success action", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({ response: { data: "500 test error" } })
    );
    const store = mockStore();
    await store.dispatch(getTodos());
    const actions = store.getActions();
    const expectedActions = [
      { type: "irontodos/todos/LOADING" },
      {
        type: "irontodos/todos/GET_TODOS_ERROR",
        error: "500 test error",
      },
    ];
    expect(actions).toEqual(expectedActions);
  });
});
