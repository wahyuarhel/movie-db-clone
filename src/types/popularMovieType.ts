export interface PopularMovieResponseType {
  page: number,
  results: PopularMovieResultType[],
  totalPages: number,
  totalResult: number,
}


export interface PopularMovieResultType {
  adult: boolean,
  backdrop_path: string,
  genre_id: string[],
  id: number,
  original_Language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}
