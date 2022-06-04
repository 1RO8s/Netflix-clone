import axios from "../utils/axios";
import { useState, useEffect } from "react";
import './Row.scss'

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${fetchUrl}`);
      setMovies(request.data.results);
      //console.log('#axios',request.request?.responseURL)
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.log(movies);
  movies.forEach((movie)=>{
    const src = isLargeRow ? movie.poster_path : movie.backdrop_path
    if(src == null){
      //console.log("#null:",movie.id,":",movie.name)
    }
  })


  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${
              (isLargeRow ? movie.poster_path : movie.backdrop_path)?(isLargeRow ? base_url+movie.poster_path : base_url+movie.backdrop_path):`https://via.placeholder.com/894x502?text=${movie.title || movie.name || movie.original_name}`
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};