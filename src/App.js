import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { id: Math.floor(Math.random() * 1000), text: input };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleDelete = (e, id) => {
    console.log(id);
    const filteredArray = todos.filter((el) => {
      return el.id !== id;
    });
    console.log(filteredArray);
    setTodos(filteredArray);
  };
  return (
    <>
      <TodoForm change={handleChange} submit={handleSubmit} />
      <TodoList todos={todos} delete={handleDelete} />
    </>
  );
}

export default App;
