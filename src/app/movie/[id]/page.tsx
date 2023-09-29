'use client'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { MovieDetailsResponseStatusType } from '@/enums/enums'
import { getMovieDetails } from '@/redux/action/movieAction'
import { getTvDetails } from '@/redux/action/tvAction'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import MovieDetailContent from './movieDetailsContent'
import { MovieState } from '@/redux/slice/movieSlice'
function MovieDetailsPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { movieDetails, movieDetailsResponse }: MovieState = useAppSelector(state => state.movie)

  useEffect(() => {
    dispatch(getMovieDetails(params.id))
  }, [dispatch, params.id])

  console.log('release_date:', movieDetails.release_date)

  if (movieDetailsResponse == MovieDetailsResponseStatusType.fulfilled)
    // return <MovieDetailContent contentData={movieDetails} />
    return <div>{movieDetails.release_date}</div>
  else if (movieDetailsResponse == MovieDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  else
    return <LoadingModal />
}

export default MovieDetailsPage