import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
