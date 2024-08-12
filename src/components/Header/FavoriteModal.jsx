import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

export default function FavoriteModal() {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li
              key={favorite.location}
              className="hover:bg-gray-200 cursor-pointer"
            >
              <a onClick={() => setSelectedLocation(favorite)}>
                {favorite.location}
              </a>
            </li>
          ))
        ) : (
          <p>Nothing is added to Favorites!</p>
        )}
      </ul>
    </div>
  );
}
