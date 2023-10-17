import { IGenreResponse, IVideos } from "./movieDetailsType"

export interface ICreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export interface ILastEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: Date
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}
export interface INetwork {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
export interface IProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
export interface IProductionCountry {
  iso_3166_1: string
  name: string
}

export interface ICountry {
  air_date: Date
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}
export interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface INextEpisodeToAir {
  id: number,
  name: string,
  overview: string,
  vote_average: number,
  vote_count: number,
  air_date: Date,
  episode_number: number,
  episode_type: string,
  production_code: string,
  runtime: number | null,
  season_number: number,
  show_id: number,
  still_path: string
}

export interface IExternalId {
  facebook_id: string | null
  freebase_id: string | null
  freebase_mid: string | null
  imdb_id: string | null
  instagram_id: string | null
  tvdb_id: string | null
  tvrage_id: string | null
  twitter_id: string | null
  wikidata_id: string | null
}
export interface ITvDetailsResponse {
  adult: boolean
  backdrop_path: string
  created_by: ICreatedBy[]
  episode_run_time: number[]
  external_ids: IExternalId
  first_air_date: Date
  genres: IGenreResponse[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: Date
  last_episode_to_air: ILastEpisodeToAir
  name: string
  networks: INetwork[]
  next_episode_to_air: INextEpisodeToAir
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompany[]
  production_countries: IProductionCountry[]
  seasons: ICountry[]
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
  type: string
  videos: IVideos
  vote_average: number
  vote_count: number
}