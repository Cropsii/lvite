import React, { useState } from "react";

export default function TodoInput(props) {
  const { HandleAddTodo } = props;
  const [TodoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        enterKeyHint="enter"
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
