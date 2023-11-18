import React from "react";

export default function IndTodo(props) {
  return <li onClick={() => props.checked(props.id)}>{props.todo}</li>;
}
