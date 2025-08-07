import AddTodo from "./componets/AddTodo";
import AppName from "./componets/AppName";

import "./App.css";
import TodoItems from "./componets/TodoItems";
import { useState } from "react";
import WelCome from "./componets/WelCome";

function App() {
  const initialtodoItems = [
    /*{
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
    },*/
  ];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item  Added:${itemName}  Date:${itemDueDate}`);
    const newtodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newtodoItems);
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
