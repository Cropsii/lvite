import React from "react";
import TodoCard from "./TodoCard";
import CountButton from "./CountButton";

export default function TodoList({ todos, HandleDelete }) {
  return (
    <>
      <ul className="main">
        {todos.map((todo, todosIndex) => {
          return (
            <TodoCard
              key={todosIndex}
              HandleDelete={HandleDelete}
              ind={todosIndex}
            >
              <p>{todo}</p>
            </TodoCard>
          );
        })}
        <CountButton></CountButton>
      </ul>
    </>
  );
}
