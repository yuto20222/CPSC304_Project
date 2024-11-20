"use client";

import { Recipe } from "@/app/types";
import { useEffect, useState } from "react";
import { use } from "react";

export default function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [detailedRecipe, setDetailedRecipe] = useState(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars  // you can delete it once everything is done
const unusedSetter = setDetailedRecipe; // it is saying it will be used in the future.
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(id);
    const fetchDetailedRecipe = async () => {
      try {
        // setIsLoading(true);
        // const response = await fetch(`/api/generate-detailedrecipe?id=${id}`);
        // if (!response.ok) {
        //   throw new Error("Failed to fetch recipe details");
        // }
        // const data = await response.json();
        // setDetailedRecipe(data.recipe);
      } catch (error) {
        console.error("Error fetching detailed recipe:", error);
        setError("Failed to load recipe details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailedRecipe();
  }, [id]);

  if (isLoading) {
    return <div className="text-center py-8">Loading recipe details...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!detailedRecipe) {
    return <div className="text-center py-8">Recipe not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
      <div>mock</div>
      {/* <h1 className="text-3xl font-bold mb-4">{detailedRecipe.title}</h1>
      <p className="text-lg mb-6">{detailedRecipe.description}</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {detailedRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {detailedRecipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div> */}
    </div>
  );
}
