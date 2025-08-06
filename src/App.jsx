// src/App.jsx
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const apiKey = "67eff37918339c098eeb1544ecc97109";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
      );
      if (!res.ok) throw new Error("City not found");
      const json = await res.json();
      setData(json);
      setError(false);
    } catch {
      setError(true);
      setData(null);
    }
  };

  const showCard = data || error;

  return (
<main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex items-center justify-center px-2 py-6">
      <div
        className={`w-full max-w-md bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/20 transition-all duration-500 overflow-hidden ${
          showCard ? "max-h-[800px]" : "max-h-[200px]"
        }`}
      >
        <h1 className="text-4xl font-bold mb-6 text-center tracking-tight drop-shadow-lg bg-gradient-to-r from-yellow-200 via-pink-200 to-sky-200 bg-clip-text text-transparent">
          Weather App
        </h1>
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        {error && (
          <p className="text-red-200 bg-red-600/40 p-2 rounded text-sm mt-4 text-center animate-pulse">
            ❌ City not found. Try again.
          </p>
        )}
        {data && (
          <div className="mt-6">
            <WeatherCard data={data} />
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
