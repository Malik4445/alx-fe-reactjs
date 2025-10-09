// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  // Test 1: Initial Render Test
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Master Jest/i)).toBeInTheDocument();
  });

  // Test 2: Test Adding Todos (uses fireEvent)
  test('allows the user to add a new todo item', () => {
    render(<TodoList />);
    
    const newTodoText = 'Run the final test suite';
    
    const input = screen.getByPlaceholderText(/Add new todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: newTodoText } });
    fireEvent.click(addButton);

    expect(screen.getByText(newTodoText)).toBeInTheDocument();
  });

  // Test 3: Test Toggling Todos (uses fireEvent)
  test('allows the user to toggle a todo item completion status', () => {
    render(<TodoList />);
    
    const todoText = /Build a Todo List/i;
    const todoItem = screen.getByText(todoText);
    
    fireEvent.click(todoItem);
    
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Test Deleting Todos (uses the correct plain string for querying)
  test('allows the user to delete a todo item', () => {
    render(<TodoList />);
    
    // 💡 CORRECT FIX: Use a plain string to match the aria-label
    const todoTextToDelete = 'Master Jest'; 
    
    // Use getByText to confirm the item exists initially
    const todoItem = screen.getByText(todoTextToDelete);
    expect(todoItem).toBeInTheDocument(); 
    
    // Find the delete button using the constructed, correct aria-label name
    const deleteButton = screen.getByRole('button', { name: `Delete ${todoTextToDelete}` });
    
    // Simulate click
    fireEvent.click(deleteButton);
    
    // Verify the item is removed (using queryByText is safer here, but testing-library is smart enough)
    expect(todoItem).not.toBeInTheDocument();
  });
});