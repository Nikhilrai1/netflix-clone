import React, { useState } from 'react'
import "./row.css"
import axios from '../../api/axios';
import { useEffect } from 'react';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request; // always return after fetching data for finish up request.
    }

    fetchData();

  }, [fetchUrl])
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie?.name || movie?.title || movie?.original_name}
            />
          )
        )
        )
        }
      </div>
    </div>
  )
}

export default Row