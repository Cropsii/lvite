import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default function App() {
  let todos = [
    "gat ta the gym",
    "let it go",
    "im so sorry",
    "i cant do this",
    "please",
  ];
  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
}
