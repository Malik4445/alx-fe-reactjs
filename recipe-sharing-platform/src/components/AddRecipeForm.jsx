// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

// Define the initial state structure for the form
const initialFormState = {
  title: '',
  image: '',
  summary: '',
  ingredients: '',
  instructions: '',
};

const AddRecipeForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error for the field as the user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  // Validation Logic
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe Title is required.';
    }
    if (!formData.summary.trim()) {
      newErrors.summary = 'A short summary is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients list is required.';
    } else if (formData.ingredients.split('\n').filter(line => line.trim() !== '').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients (one per line).';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required.';
    }
    // Image is optional in this mock, but you can validate it if needed
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');

    if (validate()) {
      setIsSubmitting(true);
      // --- Simulate API Call ---
      setTimeout(() => {
        console.log('New Recipe Data:', formData);
        
        // Success feedback
        setSuccessMessage(`Success! Recipe "${formData.title}" added.`);
        setFormData(initialFormState); // Clear form
        setIsSubmitting(false);
      }, 1500);
      // -------------------------
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-6 text-center border-b pb-4">
          ➕ Add New Recipe
        </h1>
        
        {/* Success Message Display */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          
          {/* Form Fields: Title & Image (Responsive Grid) */}
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Recipe Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
                aria-invalid={!!errors.title}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            {/* Image URL (Optional for simplicity) */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              />
            </div>
          </div>
          
          {/* Summary Textarea */}
          <div className="mb-4">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Short Summary *</label>
            <textarea
              id="summary"
              name="summary"
              rows="2"
              value={formData.summary}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.summary ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
              aria-invalid={!!errors.summary}
            ></textarea>
            {errors.summary && <p className="text-red-500 text-xs mt-1">{errors.summary}</p>}
          </div>

          {/* Ingredients Textarea */}
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">Ingredients (List each item on a new line) *</label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="5"
              value={formData.ingredients}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
              aria-invalid={!!errors.ingredients}
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
          </div>

          {/* Instructions Textarea */}
          <div className="mb-6">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">Preparation Steps (List each step on a new line) *</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="7"
              value={formData.instructions}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
              aria-invalid={!!errors.instructions}
            ></textarea>
            {errors.instructions && <p className="text-red-500 text-xs mt-1">{errors.instructions}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full 
                        px-4 py-3 
                        text-lg font-semibold 
                        rounded-lg 
                        transition duration-150 
                        focus:outline-none focus:ring-4 
                        ${isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-opacity-50'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Add Recipe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;