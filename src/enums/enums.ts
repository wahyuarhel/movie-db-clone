export enum PopularMoviesResponseType {
  pending = 'getPopularMovies/pending',
  fulfilled = 'getPopularMovies/fulfilled',
  rejected = 'getPopularMovies/rejected'
}

export enum TrendingMovieTodayResponseType {
  pending = 'getTrendingMovieToday/pending',
  fulfilled = 'getTrendingMovieToday/fulfilled',
  rejected = 'getTrendingMovieToday/rejected'
}
export enum TrendingMovieWeekResponseType {
  pending = 'getTrendingMovieWeek/pending',
  fulfilled = 'getTrendingMovieWeek/fulfilled',
  rejected = 'getTrendingMovieWeek/rejected'
}

export enum MediaType {
  tv = 'tv',
  movie = 'movie',
  person = "person"
}

export enum MovieDetailsResponseStatusType {
  pending = 'getMovieDetails/pending',
  fulfilled = 'getMovieDetails/fulfilled',
  rejected = 'getMovieDetails/rejected'
}

export enum TvDetailsResponseStatusType {
  pending = 'getTvDetails/pending',
  fulfilled = 'getTvDetails/fulfilled',
  rejected = 'getTvDetails/rejected'
}