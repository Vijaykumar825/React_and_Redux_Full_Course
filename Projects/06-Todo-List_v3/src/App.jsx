import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";

import "./App.css";
import TodoItems from "./componets/TodoItems";
import { useState } from "react";
import WelCome from "./componets/WelCome";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const handleDeleteItem = (TodoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != TodoItemName);
    setTodoItems(newTodoItems);

    console.log(`Item Deleted ${TodoItemName}`);
  };

  return (
    <center>
      <AppName />
      <div className="todo-container">
        <AddTodo OnNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelCome />}
        <TodoItems todoItems={todoItems} OnDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
