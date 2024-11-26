import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, settodos] = useState([]);
  const HandleAddTodo = (newTodo) => {
    if (newTodo.trim("") === "") return;
    const newTodosList = [...todos, newTodo];
    settodos(newTodosList);
  };

  const HandleDelete = (index) => {
    const newList = todos.filter((_, id) => id !== index);
    settodos(newList);
  };

  return (
    <>
      <TodoInput HandleAddTodo={HandleAddTodo} />
      <TodoList todos={todos} HandleDelete={HandleDelete} />
    </>
  );
}
