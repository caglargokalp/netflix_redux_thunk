import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { options } from "./constants/constans";
import { baseImageURL } from "./constants/constans";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log("ne hatasi", err));
  }, []);

  console.log("genre", movies);
  return (
    <div>
      <h2> {genre.name} </h2>
      <Splide  options={{
        autoWidth:true,
        pagination:false,
        gap:'10px'        
    }}  aria-label="My Favorite Images">
        {movies?.map((movie) =>(
            <SplideSlide key={movie.id}>
              <Link to={`/detay/${movie.id}`}>  
            <img className="movie" src={baseImageURL.concat(movie.poster_path)} alt="Image 1"/>
            </Link>
          </SplideSlide>

        ))}

  
  <SplideSlide>
 <h2>selam</h2>
  </SplideSlide>
</Splide>


      
    </div>
  );
};

export default MovieList;
