const SearchBar = ({ city, setCity, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex items-center gap-3 mb-8">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-6 py-3 rounded-2xl text-gray-900 outline-none shadow-lg bg-white/90 focus:ring-2 ring-indigo-300 transition"
      />
      <button
        onClick={onSearch}
        className="p-3 bg-gradient-to-br from-pink-400 via-blue-400 to-blue-500 rounded-full shadow-lg hover:scale-110 transition"
      >
        <img src="/images/search.png" alt="search" className="w-5 h-5" />
      </button>
    </div>
  );
};
export default SearchBar;
