import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import { api_key } from "../../../ApiKey";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchQuery}&page=1`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Ошибка при выполнении поиска:", error);
      setSearchResults([]);
    }
  };

  return (
    <div id="home">
      <div className="container">
        <div className="watch">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Поиск фильма..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button>Найти</button>
          </form>

          <div className="flex items-center justify-center  flex-wrap  mt-10  ">
            {searchResults.map((el) => (
              <div className="w-[400px] h-[400px] ml-[80px] mt-10 my-24 ">
                <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class=" mx-auto  m-1 w-[250px] h-[300px]"
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {el.title}
                    </h5>
                    <h5 class=" text-2xl font-bold tracking-tight text-blue-600 dark:text-white">
                      {el.popularity}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
