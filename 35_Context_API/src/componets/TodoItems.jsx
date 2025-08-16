import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const  = contextobj.todoItems;
  //console.log(todoItems);

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          //OnDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
