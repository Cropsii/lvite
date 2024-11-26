import React from "react";

export default function TodoCard({ children, HandleDelete, ind }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i
          className="fa-solid fa-trash-can"
          onClick={() => HandleDelete(ind)}
        ></i>
      </div>
    </li>
  );
}
