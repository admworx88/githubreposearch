import React, { useState, useEffect } from "react";
import { Results } from "./Index";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([{}]);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setRepos(repos);
  }, [repos]);

  const handleClick = async () => {
    try {
      await fetch("https://api.github.com/search/repositories?q=" + searchInput)
        .then(
          (response) => {
            return response.json();
          },
          (error) => {
            console.log(error);
          }
        )
        .then((result) => {
          setRepos(result);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row font-mono text-black w-80">
        <input
          value={searchInput}
          onChange={handleChange}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          autoComplete="false"
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex ml-3 p-2 rounded-md bg-teal-700 text-white hover:bg-teal-900 text-sm"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <Results repos={repos} />
    </div>
  );
};

export default SearchBar;
