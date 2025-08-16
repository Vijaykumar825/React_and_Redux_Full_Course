import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import TodoItems from "./componets/TodoItems";
import TodoItems2 from "./componets/TodoItems2";

import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="items-container">
        <TodoItems />
        <TodoItems2 />
      </div>
    </center>
  );
}

export default App;
