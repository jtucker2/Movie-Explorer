import { useState, useEffect } from 'react'
import '../css/App.css'
import Item from './Item';
import HeroHeader from './HeroHeader';
import { fetchTrendingMovies } from '../requests';
import { Movie } from '../types/api';

function App() {
  const [loadedMovies, setLoadedMovies] = useState<Movie[]>([]);

  console.log(loadedMovies);

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => setLoadedMovies(response.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <HeroHeader/>
      <div id="container">
        {loadedMovies.map((item) => <Item config={item}/>)}
      </div>
    </>
  )
}

export default App
