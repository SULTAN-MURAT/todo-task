import React from "react";

function Todo({ todos, setTodos, filteredTodos, setFilterTodos }) {

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const filterTodoHandler=(e)=>{
    setFilterTodos(e.target.name)
}

  return (
    <div className="todo-item">
      <div>
        {filteredTodos.map((todo, index) => {
          return (
            <div className="todo-line" key={index}>
              <input type="checkbox" onClick={() => completeTodo(index)} />
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      <div className="button-container"><span className="todo-count">{filteredTodos.length}</span>
        <button onClick={filterTodoHandler} name="all">All</button>
        <button onClick={filterTodoHandler} name="completed">
          Completed
        </button>
        <button onClick={filterTodoHandler} name="uncompleted">
          Uncompleted
        </button>
      </div>
    </div>
  );
}

export default Todo;
