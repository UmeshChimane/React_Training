import "./App.css";
import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import type { Todo } from "./types/todo";
import useLocalStorage from "./hooks/useLocalStorage";

import AllTodos from "./pages/AllTodos";
import ActiveTodos from "./pages/ActiveTodos";
import CompletedTodos from "./pages/CompletedTodos";

function App() {
  const [todos, setTodos] =
    useLocalStorage<Todo[]>("todos", []);

  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setInput("");
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Todo App</h1>

        {/* Add Todo */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
        />

        <button onClick={handleAddTodo}>
          Add
        </button>

        {/* Navigation */}
        <nav>
          <Link to="/">All</Link>{" "}
          <Link to="/active">Active</Link>{" "}
          <Link to="/completed">Completed</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <AllTodos
                todos={todos}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            }
          />

          <Route
            path="/active"
            element={
              <ActiveTodos
                todos={todos}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            }
          />

          <Route
            path="/completed"
            element={
              <CompletedTodos
                todos={todos}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;