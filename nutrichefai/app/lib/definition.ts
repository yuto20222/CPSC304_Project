export type Recipe = {
    id: number;
    title: string;
    overview: string;
    cooking_time: number;
}

export type RecipeStep = {
    id: number;
    step_num: number;
    description: string;
}

export type NutritionFact = {
    id: number;
    calories: number;
    proteins: number;
    fats: number;
}

export type Ingredient = {
    id: number;
    name: string;
    storage_temp: number;
}

export type PerishableIngredient = {
    id: number;
    shelf_life: number;
}

export type Allergen = {
    id: number;
    name: string;
}

export type IngredientAllergen = {
    ingredient_id: number;
    allergen_id: number;
}

export type Category = {
    id: number;
    name: string;
}

export type RecipeCategory = {
    recipe_id: number;
    category_id: number;
}

export type Cuisine = {
    id: number;
    name: string;
}

export type RecipeCuisine = {
    recipe_id: number;
    cuisine_id: number;
}

export type DietaryRestriction = {
    id: number;
    name: string;
    description: string;
}

export type RecipeDietaryRestriction = {
    recipe_id: number;
    dietary_id: number;
}

export type User = {
    id: number;
    name: string;
}

export type UserRecipe = {
    user_id: number;
    recipe_id: number;
}