import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";
const TodoItems = ({ todoItems, OnDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          OnDeleteClick={OnDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
