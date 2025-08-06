const WeatherInfo = ({ humidity, windSpeed }) => {
  return (
    <div className="flex justify-evenly items-center w-full mt-7 space-x-4">
      <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 shadow-inner hover:bg-white/20 transition group">
        <img
          src="/images/humidity.png"
          alt="humidity"
          className="w-8 h-8 filter drop-shadow-md opacity-80 group-hover:scale-110 transition"
        />
        <div>
          <p className="text-2xl font-bold">{humidity}%</p>
          <p className="text-xs text-white/70">Humidity</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 shadow-inner hover:bg-white/20 transition group">
        <img
          src="/images/wind.png"
          alt="wind"
          className="w-8 h-8 filter drop-shadow-md opacity-80 group-hover:scale-110 transition"
        />
        <div>
          <p className="text-2xl font-bold">{windSpeed} <span className="text-base font-medium">km/h</span></p>
          <p className="text-xs text-white/70">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
