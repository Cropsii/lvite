import React from "react";
import TodoCard from "./TodoCard";
import TodoButton from "./CountButton";

function test(s) {
  return s.includes("o");
}
export default function TodoList(props) {
  const { todos } = props;
  const { HandleDelete } = props;
  return (
    <>
      <ul className="main">
        {todos.map((todo, todosIndex) => {
          return (
            <TodoCard key={todosIndex} HandleDelete={HandleDelete}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
        <TodoButton></TodoButton>
      </ul>
    </>
  );
}
