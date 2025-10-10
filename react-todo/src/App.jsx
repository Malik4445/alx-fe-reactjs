// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList'; 

function App() {
  return (
    // Simplify the return to the minimum required element
    <div style={{ padding: '20px' }}>
      <TodoList /> 
    </div>
  );
}

export default App;