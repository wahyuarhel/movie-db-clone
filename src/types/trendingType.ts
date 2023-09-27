import { MediaTypeEnum } from "@/enums/enums"


export interface TrendingResponseType {
  page: number,
  results: [
    {
      adult: boolean,
      backdrop_path: string,
      id: number,
      title: string,
      name: string,
      original_language: string,
      original_title: string,
      original_name: string,
      overview: string,
      poster_path: string,
      media_type: MediaTypeEnum,
      genre_ids: number[],
      popularity: number,
      first_air_date: string
      release_date: string,
      video: boolean,
      vote_average: number,
      vote_count: number
    },
  ],
  total_pages: number,
  total_results: number
}
