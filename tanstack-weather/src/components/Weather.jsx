import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weatherApi";

function Weather() {
  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeather,
    staleTime: 5 * 60 * 1000,

    retry: 3,

    retryDelay: (attemptIndex) =>
      Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  if (isPending) {
    return <p>Loading weather...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Weather</h2>

      <p>
        Temperature: {data.current.temperature_2m}°C
      </p>

      <p>
        Humidity: {data.current.relative_humidity_2m}%
      </p>

      <p>
        Wind Speed: {data.current.wind_speed_10m} km/h
      </p>

      <button onClick={() => refetch()}>
        Refresh Weather
      </button>

      {isFetching && <p>Updating weather...</p>}
    </div>
  );
}

export default Weather;