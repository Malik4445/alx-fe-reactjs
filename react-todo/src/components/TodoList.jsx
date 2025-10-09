// src/components/TodoList.jsx
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm.jsx';
import './TodoList.css'; 

const initialTodos = [
  // ... initialTodos are the same ...
  { id: 1, text: 'Learn React Testing Library', completed: false },
  { id: 2, text: 'Master Jest', completed: true },
  { id: 3, text: 'Build a Todo List', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Updated addTodo to accept only the text
  const addTodo = (text) => {
    const newId = Math.max(...todos.map(t => t.id), 0) + 1;
    const todoItem = {
      id: newId,
      text: text,
      completed: false,
    };
    setTodos([...todos, todoItem]);
  };
  
  // toggleTodo and deleteTodo remain the same (as provided in previous answers)
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    const todoTextToDelete = 'Master Jest'; 
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>

      {/* 🎯 Use the separated component and pass the handler */}
      <AddTodoForm addTodo={addTodo} /> 

      {/* Todo list display (unchanged) */}
      <ul className="todos">
        {todos.map(todo => (
          // ... list item structure remains the same ...
          <li 
            key={todo.id}
            data-testid={`todo-item-${todo.id}`}
            className={todo.completed ? 'completed' : ''}
          >
            <span 
              onClick={() => toggleTodo(todo.id)} 
              style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
              aria-label={`Toggle ${todo.text}`}
            >
              {todo.text}
            </span>
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