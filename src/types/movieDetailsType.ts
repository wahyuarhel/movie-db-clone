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


export interface IVideoResponse {
  results: {
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
}
export interface ISpokenLanguageResponse {
  english_name: string
  iso_639_1: string
  name: string
}
export interface ICreditREsponse {
  cast: {
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
  }[]
  crew: {
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
  }[]
}

export interface IKeywordResponse {
  id: number
  name: string
}

export interface IMovieDetailsResponse {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  credits: ICreditREsponse
  genres: IGenreResponse[]
  homepage: string
  id: number
  imdb_id: string
  keywords: {
    keywords: {
      id: number
      name: string
    }[]
  }
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompanyResponse[]
  production_countries: IProductionCountryResponse[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpokenLanguageResponse[]
  status: string
  tagline: string
  title: string
  video: boolean
  videos: IVideoResponse[]
  vote_average: number
  vote_count: number
}
