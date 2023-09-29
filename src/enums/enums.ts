export enum PopularMoviesResponseEnum {
  pending = 'getPopularMovies/pending',
  fulfilled = 'getPopularMovies/fulfilled',
  rejected = 'getPopularMovies/rejected'
}

export enum TrendingMovieTodayResponseEnum {
  pending = 'getTrendingMovieToday/pending',
  fulfilled = 'getTrendingMovieToday/fulfilled',
  rejected = 'getTrendingMovieToday/rejected'
}
export enum TrendingMovieWeekResponseEnum {
  pending = 'getTrendingMovieWeek/pending',
  fulfilled = 'getTrendingMovieWeek/fulfilled',
  rejected = 'getTrendingMovieWeek/rejected'
}

export enum MediaTypeEnum {
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