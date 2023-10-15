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

function MovieDetailsPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { movieDetails, movieDetailsResponse, recommendationMovieById, recommendationMovieByIdResponse }: MovieState = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(fetchMovieDetails(id as string))
    dispatch(getRecommendationMovieByMovieId(id as string))
  }, [dispatch, id])

  if (movieDetailsResponse === MovieDetailsResponseStatusType.pending)
    return <LoadingModal isOpen={movieDetailsResponse === MovieDetailsResponseStatusType.pending} />
  if (movieDetailsResponse === MovieDetailsResponseStatusType.rejected)
    return (<FailedContent />)

  return <MovieDetailContent movieData={movieDetails} recommendationMovieById={recommendationMovieById} />

}

export default MovieDetailsPage