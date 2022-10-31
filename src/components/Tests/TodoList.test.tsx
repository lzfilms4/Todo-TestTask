import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import TodoList from "../TodoList/TodoList";
import App from "../../App";

import { store } from "../../redux/store";

describe("Todos list", () => {
  it("Check empty todos list", () => {
    const view = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const todosList = screen.getByTestId("Tasks-List");
    expect(todosList).toHaveTextContent("Совсем нету задач(");
    expect(view).toMatchSnapshot();
  });
  it("Cech with new todo in list", () => {
    const view = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const newTodoField = screen.getByLabelText("What needs to be done?");
    const todosCounter = screen.getByText(/items left/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.input(newTodoField, { value: "test" });
    fireEvent.click(addButton);

    expect(todosCounter).toHaveTextContent("1");
    expect(view).toMatchSnapshot();
  });
  it("Make todo completed, then clear tasks", () => {
    const view = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const todosCounter = screen.getByText(/items left/i);
    const completeButton = screen.getByTestId("Complete-Btn");
    const clearCompleted = screen.getByText(/Clear/i);

    fireEvent.click(completeButton);
    fireEvent.click(clearCompleted);

    expect(todosCounter).toHaveTextContent("0");
    expect(view).toMatchSnapshot();
  });
});
