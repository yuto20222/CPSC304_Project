"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface IngredientListProps {
  ingredients: string[];
  removeIngredient: (index: number) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({
  ingredients,
  removeIngredient,
}) => (
  <ul className="space-y-2 mb-4">
    {ingredients.map((ingredient, index) => (
      <li
        key={index}
        className="flex items-center justify-between bg-gray-100 p-2 rounded"
      >
        <span>{ingredient}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeIngredient(index)}
        >
          <X className="h-4 w-4" />
        </Button>
      </li>
    ))}
  </ul>
);

export default IngredientList;
