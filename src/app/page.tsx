"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  console.log("rerender");
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Next.js", completed: false },
    { id: 3, text: "Learn TypeScript", completed: true },
    { id: 4, text: "Learn Tailwind CSS", completed: false },
  ]);

  const incompleteTasks = todos.filter((todo) => !todo.completed).length;

  function addTodo(e: FormEvent) {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: newTodo, completed: false },
    ]);

    setNewTodo("");

    e.preventDefault();
  }

  return (
    <div className="wrapper">
      <main className="container">
        <div className="header">
          <h1 className="title">Todo List</h1>

          <div className="incomplete-tasks">
            <span className="badge">{incompleteTasks}</span> incomplete tasks
          </div>
        </div>

        <form className="todo-form" onSubmit={(e) => addTodo(e)}>
          <input
            className="todo-input"
            placeholder="What do you want to do today?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button className="todo-button">+</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo">
              <label className="todo-label">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  className="todo-checkbox"
                />
                {todo.text}
              </label>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
