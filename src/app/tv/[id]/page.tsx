'use client'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { TvDetailsResponseStatusType } from '@/enums/enums'
import { getTvDetails } from '@/redux/action/tvAction'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import TvDetailContent from './tvDetailsContent'

function TvDetailsPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { tvDetails, tvDetailsResponseStatus } = useAppSelector(state => state.movie)

  useEffect(() => {
    dispatch(getTvDetails(params.id))
  }, [dispatch, params.id])


  if (tvDetailsResponseStatus === TvDetailsResponseStatusType.pending)
    return <LoadingModal isOpen={tvDetailsResponseStatus === TvDetailsResponseStatusType.pending} />
  else if (tvDetailsResponseStatus === TvDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  else return (
    <TvDetailContent tvDetails={tvDetails} />
  )
}

export default TvDetailsPage