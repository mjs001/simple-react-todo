import React, { useState } from "react";

export default function Todos() {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState([{ todo: "Buy Milk" }]);

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
    setTodo((prev) => [...prev, { todo: inputTodo }]);
    setInputTodo("");
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
        {todo.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
}
