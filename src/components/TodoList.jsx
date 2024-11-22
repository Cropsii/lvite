import React from "react";
import TodoCard from "./TodoCard";

function test(s) {
  return s.includes("o");
}
export default function TodoList(props) {
  const { todos } = props;
  return (
    <>
      <ul className="main">
        {todos.map((todo, todosIndex) => {
          return (
            <TodoCard key={todosIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </>
  );
}
