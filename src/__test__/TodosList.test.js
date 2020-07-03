import React from "react";
import TodoList from "../TodosList";
import { renderWithProvider } from "../jest/utils";
import thunk from "redux-thunk";
import createMockStore from "redux-mock-store";
import { screen } from "@testing-library/react";

const mockStore = createMockStore([thunk]);

const buildState = (changes) => ({
  todos: {
    loading: false,
    results: { 1: { id: 1, title: "todo title", body: "todo body" } },
    error: null,
    ...changes,
  },
});

describe("TodoList", () => {
  it("should render todos", () => {
    const store = mockStore(buildState());
    renderWithProvider(<TodoList />, { store });
    screen.debug();
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });
  it("should render loaders", () => {
    const store = mockStore(buildState({ loading: true }));
    renderWithProvider(<TodoList />, { store });
    screen.debug();
    expect(screen.getByText(/cargando/i)).toBeInTheDocument();
  });
});
