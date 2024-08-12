import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeToFavorites = (location) => {
    const restFavorites = favorites.filter(
      (favorite) => favorite.location !== location
    );
    setFavorites(restFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeToFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
