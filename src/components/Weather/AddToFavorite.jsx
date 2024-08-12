/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";
export default function AddToFavorite() {
  const { favorites, addToFavorites, removeToFavorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);

  const [isFavorite, toggleFavorite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((f) => f.location === location);
    toggleFavorite(found);
  }, []);

  function handleFavorite() {
    const found = favorites.find((f) => f.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeToFavorites(location);
    }
    toggleFavorite(!isFavorite);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorite}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
