import React, { useState } from 'react';

function TodoList() {
  // State to store the list of tasks
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Function to mark a task as completed
  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to delete a task
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list container ">
      <h1>To-Do List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.elements.newTodo.value;
        if (text) {
          addTodo(text);
          e.target.elements.newTodo.value = '';
        }
      }}>
        <input type="text" name="newTodo" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(index)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

