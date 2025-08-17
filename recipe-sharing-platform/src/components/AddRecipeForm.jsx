import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.ingredients)
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps) newErrors.steps = "Steps are required";
    if (!formData.image) newErrors.image = "Image URL is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    addRecipe(formData);
    setFormData({ title: "", ingredients: "", steps: "", image: "" });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 md:p-8 rounded shadow max-w-lg mx-auto"
    >
      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded md:p-3"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-medium mt-4">Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full border p-2 rounded md:p-3"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mt-4">Steps</label>
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          className="w-full border p-2 rounded md:p-3"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <div>
        <label className="block font-medium mt-4">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2 rounded md:p-3"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 text-white px-4 py-2 md:py-3 rounded hover:bg-blue-600 transition"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;