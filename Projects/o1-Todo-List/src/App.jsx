import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import Todoitem from "./componets/Todoitem";
import Todoitem2 from "./componets/Todoitem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="items-container">
        <Todoitem></Todoitem>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
