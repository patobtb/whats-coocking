import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const fav = true
  return (
    <div className=" flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">
          My Favorites
        </p>
        {!fav && (
          <div className="h-4/5">
            <img src="./404.svg" alt="404 img" className="h-3/4" />
          </div>
        )}
        {fav && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
