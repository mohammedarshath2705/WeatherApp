// src/components/WeatherCard.jsx
import { formatDateTime } from "../utils/formatDateTime";

const WeatherCard = ({ data }) => {
  const { date, time } = formatDateTime(data.timezone);

  const weatherIcon = {
    Clouds: "/images/clouds.png",
    Clear: "/images/clear.png",
    Rain: "/images/rain.png",
    Drizzle: "/images/drizzle.png",
    Mist: "/images/mist.png",
    Snow: "/images/snow.png",
  };

  return (
    <div className="text-center text-white space-y-4 mt-4">
      <img
        src={weatherIcon[data.weather[0].main] || "/images/clear.png"}
        alt="weather"
        className="w-24 mx-auto"
      />
      <h2 className="text-4xl font-bold">{Math.round(data.main.temp)}°C</h2>
      <h3 className="text-xl">{data.name}</h3>
      <p className="text-sm text-white/80">{date}, {time}</p>
      <div className="flex justify-between mt-4 px-4 text-sm">
        <div className="flex items-center gap-2">
          <img src="/images/humidity.png" alt="humidity" className="w-5" />
          <span>{data.main.humidity}% Humidity</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/wind.png" alt="wind" className="w-5" />
          <span>{data.wind.speed} km/h Wind</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
