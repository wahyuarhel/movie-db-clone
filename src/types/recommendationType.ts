import { MediaType } from "@/enums/enums"

interface IRecommendationMovieResult {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: MediaType
  genres_ids: string[]
  popularity: number
  release_date: Date
  video: boolean
  vote_average: number
  vote_count: number

}

export interface IRecommendationMovieResponse {
  page: number
  results: IRecommendationMovieResult[]
  total_pages: number
  total_results: number
}