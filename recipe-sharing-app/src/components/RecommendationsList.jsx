import useRecipeStore from './recipeStore';
import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  // Access state and actions separately for stability
  const recommendations = useRecipeStore(state => state.recommendations);
  const favorites = useRecipeStore(state => state.favorites);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Memoize the function call using useCallback
  const memoizedGenerateRecommendations = useCallback(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  // Use useEffect to call the memoized function when favorites change
  useEffect(() => {
    memoizedGenerateRecommendations();
  }, [favorites, memoizedGenerateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;