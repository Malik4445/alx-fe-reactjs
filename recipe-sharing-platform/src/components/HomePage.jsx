import React, { useState, useEffect } from 'react';
// Correct import path for the JSON file relative to the component
import mockRecipes from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data using useEffect
  useEffect(() => {
    // Simulate an async data fetch, even though the data is local
    const loadRecipes = () => {
      // In a real app, you would use 'fetch' here.
      // E.g., fetch('/api/recipes').then(res => res.json()).then(data => setRecipes(data));
      
      // Simulating a network delay for better UI experience
      setTimeout(() => {
        setRecipes(mockRecipes); 
        setLoading(false);
      }, 500); // 0.5 second delay
    };

    loadRecipes();
  }, []); // Run only once on mount

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        <p className="ml-4 text-lg text-gray-700">Loading delicious recipes...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
          Recipe Sharing Platform
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover, cook, and share your favorite culinary creations.
        </p>
      </header>
      
      {/* Recipe Grid Layout (Step 4: Responsive Design) */}
      <div className="grid gap-6 sm:gap-8 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4">
        
        {recipes.map(recipe => (
          // Recipe Card Styling
          <div 
            key={recipe.id} 
            className="bg-white 
                       rounded-xl 
                       shadow-lg 
                       overflow-hidden 
                       border border-gray-100
                       hover:shadow-2xl 
                       hover:scale-[1.03] 
                       transition duration-300 
                       ease-in-out 
                       cursor-pointer"
          >
            {/* Recipe Image */}
            <div className="h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover" 
                    src={recipe.image} 
                    alt={recipe.title} 
                />
            </div>

            <div className="p-5">
              {/* Recipe Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                {recipe.title}
              </h2>
              
              {/* Summary */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 h-14">
                {recipe.summary}
              </p>
              
              {/* Detail Link (Call to Action) */}
              <button 
                className="w-full 
                           bg-indigo-600 
                           text-white 
                           py-2 
                           rounded-lg 
                           font-semibold 
                           hover:bg-indigo-700 
                           transition duration-150"
                onClick={() => alert(`Navigating to details for: ${recipe.title}`)}
              >
                View Recipe Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;