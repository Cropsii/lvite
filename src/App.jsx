import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default function App() {
  const [todos, settodos] = useState([]);
  const HandleAddTodo = (newTodos) => {
    const newTodosList = [...todos, newTodos];
    settodos(newTodosList);
  };
  return (
    <>
      <TodoInput HandleAddTodo={HandleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
}
