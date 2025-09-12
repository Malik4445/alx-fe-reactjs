import useRecipeStore from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

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
          <br/>
          <Link to="/">Back to List</Link>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;