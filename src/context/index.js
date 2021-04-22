import React, { useState } from "react";

export const CrudContext = React.createContext();

const CrudProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Create React Application" },
    { id: 2, todo: "Create CRUD application" },
  ]);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * (1000 - 1) + 1), todo: value },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const updateTodo = (id, value) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        return item.id === Number(id) ? { ...item, todo: value } : item;
      })
    );
  };

  const exported = {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    updateTodo,
  };
  return (
    <CrudContext.Provider value={exported}>{children}</CrudContext.Provider>
  );
};

export default CrudProvider;
