import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./features/todosReducer";

const Form = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const addTodo = () => {
    dispatch(add({ text: text, favorite: false }));
    setText("");
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Введите текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo()}>добавить</button>
    </div>
  );
};

export default Form;
