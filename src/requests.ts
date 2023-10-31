import { Images, MovieList } from "./types/api";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQ2ZDhlOWUyN2JhNzM0NmJhMDg1YmY1ZGM2NDJkNyIsInN1YiI6IjY1MzY2NzQ5OGNmY2M3MDBlOTZiMjMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlOCjQoy9oW8WqviKcRG7QKwJqh_zQHQNBWxtd_ddgw'
  }
};

const host: string = "https://api.themoviedb.org"

export async function fetchTrendingMovies() {
  const result: MovieList = await fetch(host + "/3/trending/movie/day?language=en-US", options)
    .then(response => response.json())
    .catch(err => console.error(err));
  
  return result;
}

export async function fetchMovieImages(id: number) {
  const result: Images = await fetch(host + "/3/movie/" + id + "/images", options)
    .then(response => response.json())
    .catch(err => console.error(err));
  
  return result;
}
