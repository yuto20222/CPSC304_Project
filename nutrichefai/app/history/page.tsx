"use client";

import { useState } from "react";
import { Search, Filter, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// eslint-disable-next-line @typescript-eslint/no-unused-vars // you can delete it once everything is done
const unusedIcons = { Search, Filter }; // it is saying they will be used in the future

interface Recipe {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  category: string;
  dietaryRestrictions: string[];
  cookingTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

const sampleRecipes: Recipe[] = [
  {
    id: "1",
    title: "Vegetarian Pasta Primavera",
    description: "A light and fresh pasta dish loaded with spring vegetables.",
    cuisine: "Italian",
    category: "Main Course",
    dietaryRestrictions: ["Vegetarian"],
    cookingTime: 30,
    difficulty: "Easy"
  },
  {
    id: "2",
    title: "Spicy Thai Green Curry",
    description:
      "A fragrant and spicy Thai curry with coconut milk and vegetables.",
    cuisine: "Thai",
    category: "Main Course",
    dietaryRestrictions: ["Vegan", "Gluten-Free"],
    cookingTime: 45,
    difficulty: "Medium",
  },
  // Add more sample recipes as needed
];

export default function RecipeHistory() {
  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState("all");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (cuisineFilter === "all" || recipe.cuisine === cuisineFilter) &&
      (categoryFilter === "all" || recipe.category === categoryFilter) &&
      (dietaryFilter === "all" ||
        recipe.dietaryRestrictions.includes(dietaryFilter))
  );

  const clearHistory = () => {
    setRecipes([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recipe History</h1>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={() => setSearchTerm("")}>Clear</Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cuisines</SelectItem>
              <SelectItem value="Italian">Italian</SelectItem>
              <SelectItem value="Thai">Thai</SelectItem>
              {/* Add more cuisine options */}
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Main Course">Main Course</SelectItem>
              <SelectItem value="Dessert">Dessert</SelectItem>
              {/* Add more category options */}
            </SelectContent>
          </Select>

          <Select value={dietaryFilter} onValueChange={setDietaryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Dietary Restrictions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Diets</SelectItem>
              <SelectItem value="Vegetarian">Vegetarian</SelectItem>
              <SelectItem value="Vegan">Vegan</SelectItem>
              <SelectItem value="Gluten-Free">Gluten-Free</SelectItem>
              {/* Add more dietary options */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600 mb-2">{recipe.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{recipe.cookingTime} mins</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>{recipe.difficulty}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={`/recipe/${recipe.id}`}>View Recipe</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {recipes.length > 0 && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Clear History</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Clear Recipe History</DialogTitle>
              <DialogDescription>
                Are you sure you want to clear your entire recipe history? This
                action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => {}}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={clearHistory}>
                Clear History
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
