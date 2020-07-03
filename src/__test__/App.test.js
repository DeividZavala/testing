import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { create } from "react-test-renderer";
import App from "../App";

describe("App test", () => {
  it("should render", () => {
    const { getByRole, getAllByRole } = render(<App />);
    const count = getByRole("heading", { name: "0" });
    const buttons = getAllByRole("button");
    expect(count).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });
  it("should increment", () => {
    render(<App />);
    const count = screen.getByRole("heading");
    let result = Number(count.textContent) + 1;
    const button = screen.getByRole("button", { name: "+" });
    fireEvent.click(button);
    expect(count.textContent).toBe(`${result}`);
  });
  it("should decrement prro", () => {
    render(<App />);
    const count = screen.getByRole("heading");
    let result = Number(count.textContent) - 1;
    const button = screen.getByRole("button", { name: "-" });
    fireEvent.click(button);
    expect(count.textContent).toBe(`${result}`);
  });
  it("should match snapshot", () => {
    const result = create(<App />).toJSON();
    expect(result).toMatchSnapshot();
  });
  it("should match snapshot on increment", () => {
    const { container } = render(<App />);
    const button = screen.getByRole("button", { name: "+" });
    fireEvent.click(button);
    const result = create(container.innerHTML).toJSON();
    expect(result).toMatchSnapshot();
  });
});
