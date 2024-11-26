import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default function App() {
  const [todos, settodos] = useState([]);
  const HandleAddTodo = (newTodos) => {
    const newTodosList = [...todos, newTodos];
    settodos(newTodosList);
  };
  const HandleDelete = (index) => {
    const newList = todos.filter((todo)=>{
      todo.id !== index
    })
    return settodos(newList)
  };
  return (
    <>
      <TodoInput HandleAddTodo={HandleAddTodo}  />
      <TodoList todos={todos} HandleDelete={HandleDelete}/>
    </>
  );
}
