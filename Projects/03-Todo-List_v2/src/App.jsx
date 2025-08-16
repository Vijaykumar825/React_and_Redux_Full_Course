import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";

import "./App.css";
import TodoItems from "./componets/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4-6-2025",
    },
    {
      name: "Goto college",
      dueDate: "4-6-2025",
    },
    {
      name: "Live life",
      dueDate: "Now",
    },
  ];
  return (
    <center>
      <AppName />
      <div className="todo-container">
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
