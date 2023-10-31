export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean,
  vote_average: number;
  vote_count: number;
}

export interface MovieList {
  page: number;
  results: Movie[]
  total_pages: number;
  total_results: number;
}

export interface Series {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface SeriesList {
  page: number;
  results: Series[]
  total_pages: number;
  total_results: number;
}

export interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Images {
  id: number;
  backdrops: Image[];
  logos: Image[];
  posters: Image[];
}
