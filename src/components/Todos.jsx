import React, { useState } from "react";
import IndTodo from "./IndTodo";

export default function Todos() {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState(["Buy Milk"]);
  console.log(todo);
  function handleOnChange(e) {
    const { value } = e.target;
    setInputTodo(value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  }

  function addTodo() {
    setTodo((prev) => [...prev, inputTodo]);
    setInputTodo("");
  }

  function deleteItem(id) {
    setTodo((prev) => {
      return prev.filter((todo, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form
        className="form"
        onSubmit={(e) => e.preventDefault()}
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          name="todoInput"
          onChange={handleOnChange}
          value={inputTodo}
        />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </form>
      <ul key={0}>
        {todo.map((todo, index) => (
          <IndTodo key={index} id={index} todo={todo} checked={deleteItem} />
        ))}
        {console.log(todo)}
      </ul>
    </div>
  );
}
