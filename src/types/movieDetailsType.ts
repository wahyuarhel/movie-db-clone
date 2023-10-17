export interface IGenreResponse {
  id: number
  name: string
}
export interface IProductionCountryResponse {
  iso_3166_1: string
  name: string
}

export interface IProductionCompanyResponse {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface IVideoDetail {
  id: string
  iso_639_1: string,
  iso_3166_1: string,
  key: string,
  name: string,
  official: boolean,
  published_at: Date,
  site: string,
  size: number,
  type: string,
}

export interface IVideos {
  results: IVideoDetail[]
}
export interface ISpokenLanguageResponse {
  english_name: string
  iso_639_1: string
  name: string
}

export interface ICastMemberDetail {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}

export interface ICrewMemberDetail {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string | null,
  credit_id: string,
  department: string,
  job: string
}
export interface ICreditResponse {
  cast: ICastMemberDetail[]
  crew: ICrewMemberDetail[]
}
export interface ICreditByMovieIdResponse extends ICreditResponse {
  id: string,
}

export interface IKeywordDetail {
  id: number
  name: string
}
export interface IKeywords {
  keywords: IKeywordDetail[]
}

export interface IAuthorDetail {
  avatar_path: string | null
  name: string
  rating: number | null
  username: string
}
export interface IReviewResult {
  author: string
  author_details: IAuthorDetail
  content: string
  created_at: Date
  id: string
  updated_at: Date
  url: string
}
export interface IReviewResponse {
  page: number
  results: IReviewResult[]
  total_pages: number
  total_results: number
}

export interface IMovieDetailsResponse {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  credits: ICreditResponse
  genres: IGenreResponse[]
  homepage: string
  id: number
  imdb_id: string
  keywords: IKeywords
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompanyResponse[]
  production_countries: IProductionCountryResponse[]
  release_date: Date
  revenue: number
  reviews: IReviewResponse
  runtime: number
  spoken_languages: ISpokenLanguageResponse[]
  status: string
  tagline: string
  title: string
  video: boolean
  videos: IVideos
  vote_average: number
  vote_count: number
}
