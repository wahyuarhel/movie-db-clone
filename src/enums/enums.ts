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
  pending = 'fetchMovieDetails/pending',
  fulfilled = 'fetchMovieDetails/fulfilled',
  rejected = 'fetchMovieDetails/rejected'
}

export enum TvDetailsResponseStatusType {
  pending = 'getTvDetails/pending',
  fulfilled = 'getTvDetails/fulfilled',
  rejected = 'getTvDetails/rejected'
}

export enum CreditByMovieIdResponseStatusType {
  pending = 'getCreditByMovieId/pending',
  fulfilled = 'getCreditByMovieId/fulfilled',
  rejected = 'getCreditByMovieId/rejected'
}
export enum RecommendationMovieResponseStatusType {
  unknown = '',
  pending = 'getRecommendationMovieByMovieId/pending',
  fulfilled = 'getRecommendationMovieByMovieId/fulfilled',
  rejected = 'getRecommendationMovieByMovieId/rejected'
}