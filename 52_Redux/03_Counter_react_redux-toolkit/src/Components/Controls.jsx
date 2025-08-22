import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions, privacyActions } from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleincrement = () => {
    //console.log("increment");
    dispatch(counterActions.increment());
  };
  const handledecrement = () => {
    //console.log("decrement");
    dispatch(counterActions.decrement());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterActions.subtract({ num: inputElement.current.value }));
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
