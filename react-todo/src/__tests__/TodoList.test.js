// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

// Helper function to check for initial todos
const checkInitialTodos = () => {
  // Check that all initial items are present
  expect(screen.getByText(/Learn React Testing Library/i)).toBeInTheDocument();
  expect(screen.getByText(/Master Jest/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument();
};

describe('TodoList Component', () => {

  // Test 1: Initial Render Test
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    expect(screen.getByRole('heading', { name: /todo list/i })).toBeInTheDocument();
    checkInitialTodos();
    
    // Check initial completed status (Master Jest should have line-through style)
    const masterJest = screen.getByText(/Master Jest/i);
    expect(masterJest).toHaveStyle('text-decoration: line-through');
  });

  // Test 2: Test Adding Todos
  test('allows the user to add a new todo item', () => {
    render(<TodoList />);
    
    // Define the new todo text
    const newTodoText = 'Write comprehensive tests';
    
    // Find input and button
    const input = screen.getByPlaceholderText(/Add new todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    // Simulate user typing
    fireEvent.change(input, { target: { value: newTodoText } });
    expect(input.value).toBe(newTodoText);

    // Simulate form submission (clicking the button)
    fireEvent.click(addButton);

    // Verify the new todo is rendered and the input is cleared
    expect(screen.getByText(newTodoText)).toBeInTheDocument();
    expect(input.value).toBe('');
    
    // Verify the total count increased (optional, but good)
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4); // 3 initial + 1 new
  });

  // Test 3: Test Toggling Todos
  test('allows the user to toggle a todo item completion status', () => {
    render(<TodoList />);
    
    const todoText = /Build a Todo List/i;
    const todoItem = screen.getByText(todoText);
    
    // Initial check: Not completed (no line-through)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    // Simulate click to toggle
    fireEvent.click(todoItem);
    
    // Check: Completed (has line-through)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Simulate click again to toggle back
    fireEvent.click(todoItem);
    
    // Final check: Not completed again
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Test Deleting Todos
  test('allows the user to delete a todo item', () => {
    render(<TodoList />);
    
    const todoTextToDelete = /Master Jest/i;
    
    // Find the todo item to be deleted
    const todoItem = screen.getByText(todoTextToDelete);
    expect(todoItem).toBeInTheDocument(); // Ensure it exists initially
    
    // Find the delete button associated with that todo item (using aria-label is best)
    const deleteButton = screen.getByRole('button', { name: `Delete ${todoTextToDelete}` });
    
    // Simulate click on the delete button
    fireEvent.click(deleteButton);
    
    // Verify the item is removed from the DOM
    expect(todoItem).not.toBeInTheDocument();
    
    // Verify the total count decreased
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2); // 3 initial - 1 deleted
  });
});