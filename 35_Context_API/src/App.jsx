import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";
import { TodoItemsContext } from "./store/todo-items-store";

import "./App.css";
import TodoItems from "./componets/TodoItems";
import { useState, useReducer } from "react";
import WelCome from "./componets/WelCome";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const deleteItem = (TodoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != TodoItemName);
    setTodoItems(newTodoItems);

    //console.log(`Item Deleted ${TodoItemName}`);
  };
  const defaultTodoItems = [{ name: "buy milk", dueDate: "today" }];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center>
        <AppName />
        <div className="todo-container">
          <AddTodo />
          <WelCome />
          <TodoItems />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
