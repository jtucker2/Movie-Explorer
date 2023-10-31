import { useState, useEffect } from 'react'
import './App.css'
import Item from './Item';

async function apiFetch() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQ2ZDhlOWUyN2JhNzM0NmJhMDg1YmY1ZGM2NDJkNyIsInN1YiI6IjY1MzY2NzQ5OGNmY2M3MDBlOTZiMjMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dlOCjQoy9oW8WqviKcRG7QKwJqh_zQHQNBWxtd_ddgw'
    }
  };
  
  const result = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .catch(err => console.error(err));
  
  return result;
}

function App() {
  const [loadedData, setLoadedData] = useState([]);

  console.log(loadedData)
  
  async function fetchData() {
    const data = await apiFetch();
    setLoadedData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div id="container">
        {loadedData.map((item) => <Item config={item}/>)}
      </div>
    </>
  )
}

export default App
