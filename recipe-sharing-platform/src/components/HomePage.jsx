import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import mockRecipes from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipes = () => {
      setTimeout(() => {
        setRecipes(mockRecipes); 
        setLoading(false);
      }, 500);
    };

    loadRecipes();
  }, []);

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
      
      <div className="grid gap-6 sm:gap-8 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4">
        
        {recipes.map(recipe => (
          <Link 
            to={`/recipe/${recipe.id}`} // Navigate to /recipe/:id
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
                       group block"
          >
            <div className="h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover 
                                group-hover:opacity-90 transition duration-300" 
                    src={recipe.image} 
                    alt={recipe.title} 
                />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 h-14">
                {recipe.summary}
              </p>
              
              <div 
                className="w-full text-center
                           bg-indigo-600 
                           text-white 
                           py-2 
                           rounded-lg 
                           font-semibold 
                           group-hover:bg-indigo-700 
                           transition duration-150"
              >
                View Recipe Details
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;