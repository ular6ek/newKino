import axios from "axios";
import { api_key } from "../../../ApiKey";
import React, { useEffect, useState } from "react";

const Popular = () => {
  const [populat, setPopular] = useState([]);
  function getPopular() {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=15`
    ).then((res) => {
      console.log(res.data.results);
      setPopular(res.data.results);
    });
  }

  useEffect(() => {
    getPopular();
  }, []);
  console.log("werty");
  return (
    <div id="movie">
      <div className="container">
        <div className="flex flex-wrap  mt-10  ">
          {populat.map((el) => (
            <div className="w-[400px] h-[400px] ml-[80px] mt-10  ">
              <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class=" mx-auto  m-1 w-[250px] h-[300px]"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.title}
                    
                  </h5>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-white">
                    {el.popularity}
                    </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Popular;
