import React, { useContext, useEffect, useState } from "react";
import { CrudContext } from "../context/index";
import { useParams, useHistory } from "react-router-dom";

const UpdateTodo = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const { todos, updateTodo } = useContext(CrudContext);
  const { id } = useParams();
  const history = useHistory();

  const submitTodo = () => {
    updateTodo(id, currentTodo);
    history.push("/");
  };

  useEffect(() => {
    if (id) setCurrentTodo(todos.find((item) => item.id === Number(id)).todo);
  }, [id]);

  return (
    <div>
      <p>Edit todo</p>
      <input
        type="text"
        placeholder="input todo"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button onClick={submitTodo}>submit</button>
    </div>
  );
};
export default UpdateTodo;
