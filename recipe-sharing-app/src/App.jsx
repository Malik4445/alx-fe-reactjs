import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // Import the new component
import RecommendationsList from './components/RecommendationsList'; // Import the new component

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <RecipeList />
                </div>
                <div style={{ flex: 1 }}>
                  <FavoritesList />
                  <RecommendationsList />
                </div>
              </div>
            </>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
