import useRecipeStore from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  const recipe = recipes.find(r => r.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const isFavorite = favorites.includes(recipe?.id);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onSave={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
          <button onClick={handleToggleFavorite} style={{ marginLeft: '10px' }}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <br/>
          <Link to="/">Back to List</Link>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;