import React, { useContext } from "react";
import styles from "./WelCome.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelCome = ({}) => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy You Day</p>
  );
};

export default WelCome;
