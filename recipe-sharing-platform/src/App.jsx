import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail.jsx'; 
import AddRecipeForm from './components/AddRecipeForm'; // <-- NEW IMPORT

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Add Recipe Form Route */}
        <Route path="/add" element={<AddRecipeForm />} /> {/* <-- NEW ROUTE */}
        
        {/* Detail Page Route */}
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;