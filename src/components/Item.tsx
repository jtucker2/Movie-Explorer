import React, { useState } from 'react'
import { Movie } from '../apiInterfaces';
// import posterholder from '../assets/posterholder.png';

function titleLengthLimiter(title: string) {
  if (title.length > 19) {
    title = title.slice(0, 18) + "..."
  }
  return title;
}

interface ItemProps {
  config: Movie;
  // enterMoviePage: () => void;
  // selectMovie: () => void;
}

export default function Item({config}: ItemProps) {
  // const [poster, setPoster] = useState(config.images.poster)

  // if (poster == "") setPoster(posterholder);

  return (
    <div className="item">
      <img src={"https://image.tmdb.org/t/p/w500" + config.poster_path} id="list-poster" draggable="false"/>
      <div id="list-title">{titleLengthLimiter(config.title)}</div>
      <div id="list-year">{config.release_date}</div>
    </div>
  )
}
