import TodoItem from "./componets/Todoitem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      <TodoItem todoDate="4/10/2023" todoName="Buy Milk"></TodoItem>
      <TodoItem todoDate="4/10/2023" todoName="Goto Collge"></TodoItem>
    </div>
  );
};

export default TodoItems;
