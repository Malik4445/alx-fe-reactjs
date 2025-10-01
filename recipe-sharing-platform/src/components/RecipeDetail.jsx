// src/components/RecipeDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import mockRecipes from '../data.json'; 

// Using the robust function export to avoid module resolution errors
export default function RecipeDetail() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipe = () => {
      setLoading(true);
      setTimeout(() => {
        // Find the recipe, ensuring the string ID from the URL is converted to an integer
        const foundRecipe = mockRecipes.find(r => r.id === parseInt(id)); 
        
        if (foundRecipe) {
          setRecipe(foundRecipe);
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 300);
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        <p className="ml-4 text-lg text-gray-700">Fetching recipe details...</p>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50 p-8 text-center">
        <p className="text-2xl text-red-600 mb-4">Recipe Not Found 😥</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-10">
        
        {/* Back Link */}
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150 mb-6 inline-block">
          ← Back to All Recipes
        </Link>

        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 border-b pb-4">
          {recipe.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6 italic">{recipe.summary}</p>

        {/* Image and Detail Grid (Responsive Layout) */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2">
            <img 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
              src={recipe.image} 
              alt={recipe.title} 
            />
          </div>
          
          {/* Ingredients Section */}
          <div className="md:col-span-1 bg-indigo-50 p-5 rounded-lg border border-indigo-200">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Ingredients 🥕
            </h2>
            <ul className="space-y-3 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="flex items-start text-base">
                  <span className="text-indigo-500 mr-2 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b pb-2">
            Cooking Instructions 🔥
          </h2>
          <ol className="space-y-5">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center 
                                 w-6 h-6 
                                 bg-indigo-600 
                                 text-white 
                                 rounded-full 
                                 font-bold 
                                 text-sm 
                                 mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-lg text-gray-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}