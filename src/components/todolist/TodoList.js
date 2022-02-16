import { useState, useEffect } from "react";
import Todo from "../todo/Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [filterTodos, setFilterTodos] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    handleFilterTodos();
  }, [todos, filterTodos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  const handleFilterTodos = () => {
    switch (filterTodos) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted !== true));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} />
          <button type="submit" style={{marginLeft:"20px"}}>Add Todo</button>
      </form>
      <Todo
        todos={todos}
        setTodos={setTodos}
        setFilterTodos={setFilterTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default TodoList;
