import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Recipe {
  id: string;
  title: string;
  description: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-xl">{recipe.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="line-clamp-3">
        {recipe.description}
      </CardDescription>
    </CardContent>
    <CardFooter>
      <Button asChild className="w-full">
        <Link href={`/recipe/${recipe.id}`} legacyBehavior>
          <a>View This Recipe!</a>
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

export default RecipeCard;
