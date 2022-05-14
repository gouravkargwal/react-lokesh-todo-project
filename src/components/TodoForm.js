import React from "react";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        name="todo"
        placeholder="Add Task..."
        onChange={props.change}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
