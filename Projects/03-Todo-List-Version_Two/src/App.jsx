import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import "./App.css";
import TodoItem from "./componets/Todoitem";
import TodoItems from "./componets/TodoItems";
impo;

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Goto College",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
