import { useRef } from "react";

function AddTodo({ OnNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const handleButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName},${dueDate}`);
    OnNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button "
            onClick={handleButtonClicked}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
