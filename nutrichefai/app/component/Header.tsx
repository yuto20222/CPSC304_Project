import Link from "next/link";
import { Home, History } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopNavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">
                RecipeAI
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/history" className="flex items-center space-x-2">
                <History className="h-5 w-5" />
                <span>Recipe History</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
