'use client'
import MovieDetailContent from '@/app/movie/[id]/movieDetailsContent'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { TvDetailsResponseStatusType } from '@/enums/enums'
import { getTvDetails } from '@/redux/action/tvAction'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function TvDetailsPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { tvDetails, tvDetailsResponse } = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(getTvDetails(params.id))
  }, [dispatch, params.id])


  if (tvDetailsResponse == TvDetailsResponseStatusType.fulfilled)
    // return <MovieDetailContent contentData={tvDetails} />
    return <div>{params.id}</div>
  else if (tvDetailsResponse === TvDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  else
    return <LoadingModal />
}

export default TvDetailsPage