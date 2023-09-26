export interface PopularMovieResponseType {
  page: number,
  results: PopularMovieResultType[],
  totalPages: number,
  totalResult: number,
}


export interface PopularMovieResultType {
  adult: boolean,
  backdrop_path?: string | undefined,
  genre_id: string[],
  id: number,
  original_Language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path?: string | undefined,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export const PopularMovieResponseInitial: PopularMovieResponseType = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: undefined,
      genre_id: [],
      id: 0,
      original_Language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: undefined,
      release_date: '',
      title: 'string',
      video: false,
      vote_average: 0,
      vote_count: 0,
    }
  ],
  totalPages: 0,
  totalResult: 0,
}