import { IGenreResponse } from "./movieDetailsType"

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
  air_date: string
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
  air_date: string
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
export interface ITvDetailsResponse {
  adult: boolean
  backdrop_path: string
  created_by: ICreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  genres: IGenreResponse[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: ILastEpisodeToAir
  name: string
  next_episode_to_air: string
  networks: INetwork[]
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
  vote_average: number
  vote_count: number
}