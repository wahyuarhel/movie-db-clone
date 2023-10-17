

export interface IPopularMovieResponse {
  page: number,
  results: IPopularMovieResult[],
  totalPages: number,
  totalResult: number,
}


export interface IPopularMovieResult {
  adult: boolean,
  backdrop_path: string,
  genre_id: string[],
  id: number,
  original_Language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}
