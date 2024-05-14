import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../../ApiKey";


const NovPLaying = () => {
  const [now, setNow] = useState([]);
  function getNow() {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    ).then((res) => {
      console.log(res.data.results);
      setNow(res.data.results);
    });
  }

  useEffect(() => {
    getNow();
  }, []);
  console.log(now);
  console.log("hello");

  return (
    <div id="movie">
      <div className="container">
        <div className="flex flex-wrap  mt-10   ">
          {now.map((el) => (
            <div className="w-[400px] h-[400px] ml-[80px] mt-10 my-5  ">
              <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    class=" mx-auto  m-1 w-[250px] h-[300px]"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                    alt=""
                  />
                
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
  );
};
export default NovPLaying;
