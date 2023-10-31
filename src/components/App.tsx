import { useState, useEffect } from 'react'
import '../css/App.css'
import Item from './Item';
import HeroHeader from './HeroHeader';
import { fetchMovieImages, fetchTrendingMovies } from '../requests';
import { Images, Movie } from '../types/api';

function App() {
  const [loadedMovies, setLoadedMovies] = useState<Movie[]>([]);
  const [heroMovieImages, setHeroMovieImages] = useState<Images>({} as Images);

  // const heroMovieID: number = 945729;
  // const heroMovieID: number = 951491;
  const heroMovieID: number = 807172;
  // const heroMovieID: number = 980489;


  console.log(loadedMovies);

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => setLoadedMovies(response.results))
      .catch(err => console.error(err));
    fetchMovieImages(heroMovieID)
      .then(response => setHeroMovieImages(response))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <HeroHeader images={heroMovieImages}/>
      <div id="container">
        {loadedMovies.map((item) => <Item config={item}/>)}
      </div>
    </>
  )
}

export default App
