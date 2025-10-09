// src/components/TodoList.jsx
import React, { useState } from 'react';
import './TodoList.css'; // Assuming you'll add some CSS

const initialTodos = [
  { id: 1, text: 'Learn React Testing Library', completed: false },
  { id: 2, text: 'Master Jest', completed: true },
  { id: 3, text: 'Build a Todo List', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  // Handler for adding a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newId = Math.max(...todos.map(t => t.id), 0) + 1;
    const todoItem = {
      id: newId,
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, todoItem]);
    setNewTodo('');
  };

  // Handler for toggling completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Handler for deleting a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>

      {/* AddTodoForm implementation */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
          aria-label="New todo item"
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo list display */}
      <ul className="todos">
        {todos.map(todo => (
          <li 
            key={todo.id}
            data-testid={`todo-item-${todo.id}`}
            className={todo.completed ? 'completed' : ''}
          >
            {/* Toggling functionality */}
            <span 
              onClick={() => toggleTodo(todo.id)} 
              style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
              aria-label={`Toggle ${todo.text}`}
            >
              {todo.text}
            </span>
            
            {/* Deleting functionality */}
            <button 
              onClick={() => deleteTodo(todo.id)} 
              aria-label={`Delete ${todo.text}`}
              style={{ marginLeft: '10px' }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;