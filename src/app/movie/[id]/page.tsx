'use client'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { MovieDetailsResponseStatusType } from '@/enums/enums'
import { getMovieDetails } from '@/redux/action/movieAction'
import { MovieState } from '@/redux/slice/movieSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import MovieDetailContent from './movieDetailsContent'

function MovieDetailsPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { movieDetails, movieDetailsResponse }: MovieState = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(getMovieDetails(id as string))
  }, [dispatch, id])

  if (movieDetailsResponse == MovieDetailsResponseStatusType.fulfilled)
    return <MovieDetailContent movieData={movieDetails} />
  else if (movieDetailsResponse == MovieDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  else
    return <LoadingModal />
}

export default MovieDetailsPage