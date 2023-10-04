'use client'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { MovieDetailsResponseStatusType } from '@/enums/enums'
import { fetchMovieDetails, getRecommendationMovieByMovieId } from '@/redux/action/movieAction'
import { MovieState } from '@/redux/slice/movieSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import MovieDetailContent from './movieDetailsContent'
import { IMovieDetailsResponse } from '@/types/movieDetailsType'
import { posterUrlSizeW154 } from '@/redux/api/endpoint'

function MovieDetailsPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { movieDetails, movieDetailsResponse, recommendationMovieById, recommendationMovieByIdResponse }: MovieState = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(fetchMovieDetails(id as string))
    dispatch(getRecommendationMovieByMovieId(id as string))
  }, [dispatch, id])

  if (movieDetailsResponse == MovieDetailsResponseStatusType.fulfilled)
    return <MovieDetailContent movieData={movieDetails} recommendationMovieById={recommendationMovieById} />
  else if (movieDetailsResponse == MovieDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  else
    return <LoadingModal isOpen={movieDetailsResponse == MovieDetailsResponseStatusType.pending} />

}

export default MovieDetailsPage