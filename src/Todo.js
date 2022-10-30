import React from "react";
import { useDispatch } from "react-redux";
import { deleted } from "./features/todosReducer";
import { favorite } from "./features/todosReducer";

const Todo = (props) => {
  const dispatch = useDispatch();

  function deleteTodo(index) {
    dispatch(deleted(index));
  }
  const makeFavorite = (index) => {
    dispatch(favorite(index));
  };

  return (
    <div className={`todo ${props.todo.favorite ? "selected" : ""}`}>
      <div className="favorite">
        <button onClick={() => makeFavorite(props.index)}>★</button>
      </div>
      <div className="todo-text">{props.todo.text}</div>
      <div className="actions">
        <button onClick={() => deleteTodo(props.index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
