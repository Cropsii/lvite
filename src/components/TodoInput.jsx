import React, { useState } from "react";

export default function TodoInput(props) {
  const { HandleAddTodo } = props;
  const { HandleDelete } = props;
  const [TodoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={TodoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="add todo"
      />
      <button
        onClick={() => {
          HandleAddTodo(TodoValue);
          setTodoValue("");
        }}
      >
        add
      </button>
    </header>
  );
}
