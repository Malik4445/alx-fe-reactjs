import useRecipeStore from './recipeStore';
import { useEffect } from 'react';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get the current search term

  useEffect(() => {
    // Call filterRecipes whenever the searchTerm changes
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
    />
  );
};

export default SearchBar;