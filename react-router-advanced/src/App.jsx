// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <NavBar />
        <main style={{ padding: '20px' }}>
          <Routes>
            {/* Basic Route */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* Dynamic Route: Uses the :postId parameter */}
            <Route path="/post/:postId" element={<Post />} />
            
            {/* Protected Route: Wraps the Profile Component */}
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              {/* Nested Routes (Children of /profile) */}
              
              {/* Default/Index route for /profile */}
              <Route index element={<ProfileDetails />} /> 
              
              {/* Nested route 1: /profile/details */}
              <Route path="details" element={<ProfileDetails />} /> 
              
              {/* Nested route 2: /profile/settings */}
              <Route path="settings" element={<ProfileSettings />} /> 
              
            </Route>

            {/* Catch-all/404 Route */}
            <Route path="*" element={<h2>404: Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
