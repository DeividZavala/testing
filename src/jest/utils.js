import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../redux/TodosDuck";

export const renderWithProvider = (
  component,
  { store = createStore(reducer), ...renderOptions } = {}
) => {
  return render(<Provider store={store}>{component}</Provider>, {
    ...renderOptions,
  });
};
