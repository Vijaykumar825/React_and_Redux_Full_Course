import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleincrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handledecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleincrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handledecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter a value"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
