// src/components/AddTodoForm.jsx
import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    addTodo(newTodo.trim()); // Pass the text up to TodoList
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo..."
        aria-label="New todo item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;