import { useState } from "react";

function AddTodo({ OnNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleButtonClicked = () => {
    OnNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDueDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button "
            onClick={handleButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
