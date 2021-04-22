import React, { useContext } from "react";
import { CrudContext } from "../context/index";
import { useHistory } from "react-router-dom";

const ListTodos = () => {
  const { todos, deleteTodo } = useContext(CrudContext);
  const history = useHistory();

  return (
    <div>
      <p>ListTodos</p>
      <button onClick={() => history.push("/create-todo")}>create todo</button>
      <table>
        <tr>
          <td>id</td>
          <td>Todo</td>
          <td>Action</td>
        </tr>
        {todos.length > 0 &&
          todos.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.todo}</td>
              <td>
                <button onClick={() => history.push(`/update-todo/${item.id}`)}>
                  edit
                </button>
                <button onClick={() => deleteTodo(item.id)}>hapus</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default ListTodos;
