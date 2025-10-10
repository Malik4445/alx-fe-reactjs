// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom'; 
import TodoList from '../components/TodoList.jsx'; 
import AddTodoForm from '../components/AddTodoForm.jsx'; 

describe('TodoList Component', () => {

  // Test 1: Renders initial items (uses screen)
  test('renders the initial list of todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Master Jest/i)).toBeInTheDocument();
  });

  // Test 2: Adding Todos (uses fireEvent and screen)
  test('allows the user to add a new todo item', () => {
    render(<TodoList />);
    
    const newTodoText = 'Submit the project';
    
    // Uses screen.getByPlaceholderText
    const input = screen.getByPlaceholderText(/Add new todo/i);
    // Uses screen.getByRole
    const addButton = screen.getByRole('button', { name: /add/i });

    // Uses fireEvent.change
    fireEvent.change(input, { target: { value: newTodoText } });
    // Uses fireEvent.click
    fireEvent.click(addButton);

    // Uses screen.getByText
    expect(screen.getByText(newTodoText)).toBeInTheDocument();
  });

  // Test 3: Toggling Todos (uses fireEvent)
  test('allows the user to toggle a todo item completion status', () => {
    render(<TodoList />);
    
    const todoText = /Build a Todo List/i;
    const todoItem = screen.getByText(todoText);
    
    // Uses fireEvent.click
    fireEvent.click(todoItem);
    
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Test Deleting Todos (Simplest form of regex match)
  test('allows the user to delete a todo item', () => {
    render(<TodoList />);
    
    // Simplest Regex for the item text
    const todoTextToDelete = /Master Jest/i; 
    
    // Simplest form of the aria-label name search
    // We are looking for a button whose name contains "Delete Master Jest"
    const deleteButton = screen.getByRole('button', { name: /Delete Master Jest/i });
    
    fireEvent.click(deleteButton);
    
    // Check using queryByText and the original regex
    expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  });
});