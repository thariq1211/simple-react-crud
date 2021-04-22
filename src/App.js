import React from "react";
import CrudProvider from "./context/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListTodos from "./Components/ListTodos";
import CreateTodo from "./Components/CreateTodo";
import UpdateTodo from "./Components/UpdateTodo";

function App() {
  const styles = {
    container: {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <CrudProvider>
      <div style={styles.container}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <ListTodos />
            </Route>
            <Route path="/update-todo/:id">
              <UpdateTodo />
            </Route>
            <Route path="/create-todo">
              <CreateTodo />
            </Route>
          </Switch>
        </Router>
      </div>
    </CrudProvider>
  );
}

export default App;
