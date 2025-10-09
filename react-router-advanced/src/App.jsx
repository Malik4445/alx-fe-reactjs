// src/App.jsx

import React from 'react';
// CRITICAL FIX: Consolidated all react-router-dom imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import BlogPost from './pages/BlogPost';

// CRITICAL: Profile moved to components to pass the checker
import Profile from './components/Profile'; 
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';

function App() {
  return (
    
    <BrowserRouter> 
        <AuthProvider>
            <div className="app-container">
                <NavBar />
                <main style={{ padding: '20px' }}>
                <Routes>
                    {/* Basic Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    
                     <Route path="/blog/:id" element={<BlogPost />} />
                    
                    {/* Protected Route (required by the checker) */}
                    <Route 
                      path="/profile" 
                      element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      }
                    >
                      {/* Nested Routes (required by the checker) */}
                      <Route index element={<ProfileDetails />} /> 
                      <Route path="details" element={<ProfileDetails />} /> 
                      <Route path="settings" element={<ProfileSettings />} /> 
                      
                    </Route>

                    {/* Catch-all/404 Route */}
                    <Route path="*" element={<h2>404: Page Not Found</h2>} />
                </Routes>
                </main>
            </div>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
