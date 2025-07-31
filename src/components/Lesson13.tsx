import { useState, useEffect } from "react";
import styled from "./Lesson13.module.css";

// components

// types
type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

type RecipeType = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

type SelectedRecipeType = {
  idMeal: string | null;
  strMeal: string | null;
  strMealAlternate: string | null;
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  strMealThumb: string | null;
  strTags: string | null;
  strYoutube: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

const Lesson13 = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [recipeDetails, setRecipeDetails] = useState<SelectedRecipeType | null>(
    null
  );

  useEffect(() => {
    async function getCategories() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories(data.categories);
    }

    getCategories();
  }, []);

  useEffect(() => {
    async function getRecipes() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory?.strCategory}`
      );
      const data = await res.json();
      setRecipes(data.meals);
    }

    getRecipes();
  }, [selectedCategory]);

  useEffect(() => {
    async function getRecipe() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedRecipe}`
      );
      const data = await res.json();
      setRecipeDetails(data.meals[0]);
    }

    getRecipe();
  }, [selectedRecipe]);

  return (
    <>
      <ul className={styled.nav}>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <button
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category.strCategory}
            </button>
          </li>
        ))}
      </ul>
      <hr />
      {recipes?.length > 0 &&
        recipeDetails === null &&
        recipes.map((recipe) => (
          <li
            onClick={() => setSelectedRecipe(recipe.idMeal)}
            key={recipe.idMeal}
          >
            {recipe.strMeal}
          </li>
        ))}
      {recipeDetails !== null && <h1>Recipe is here</h1>}
    </>
  );
};

export default Lesson13;
