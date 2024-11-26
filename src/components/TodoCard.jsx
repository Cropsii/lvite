import React, { Component } from "react";

export default function TodoCard(props) {
  const { children } = props;
  const { HandleDelete } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can" onClick={HandleDelete}></i>
      </div>
    </li>
  );
}
