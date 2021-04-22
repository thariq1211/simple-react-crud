import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CrudContext } from "../context/index";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const history = useHistory();
  const { addTodo } = useContext(CrudContext);

  const submitTodo = () => {
    addTodo(todo);
    history.push("/");
  };
  return (
    <div>
      <p>create todo</p>
      <input
        type="text"
        placeholder="input todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={submitTodo}>submit</button>
    </div>
  );
};
export default CreateTodo;
