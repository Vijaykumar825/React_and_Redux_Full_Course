import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import "./App.css";
import TodoItems from "./componets/TodoItems";
import WelCome from "./componets/WelCome";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppName />
        <div className="todo-container">
          <AddTodo />
          <WelCome />
          <TodoItems />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
