import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils.js";

const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${appId}&app_key=${appKey}&q=${searchQuery}&type=public`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("vegan");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  }; 

  return (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearch}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              placeholder="What we're cooking today..."
              className="text-sm md:text-md grow"
            />
          </label>
        </form>
        <h1 className="font-bold text-3xl lg:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular recipes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}
          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex  justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
