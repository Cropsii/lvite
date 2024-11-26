import React, { useState } from "react";

export default function CountButton() {
  const [count, setCount] = useState(0);
  const pressHeandler = () => {
    setCount(count + 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <div
        style={{ userSelect: "none", justifyContent: "space-between" }}
        className="todoItem"
      >
        <div onClick={pressHeandler} style={{ flexGrow: 1 }}>
          Count: {count}
        </div>
        <i class="fa-solid fa-rotate-right" onClick={Reset}></i>
      </div>
    </>
  );
}
