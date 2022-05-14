import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((el) => {
        return (
          <>
            <li key={el.id}>
              <p>{el.text}</p>
              <button
                onClick={(e) => {
                  props.delete(e, el.id);
                }}
              >
                Delete
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default TodoList;
