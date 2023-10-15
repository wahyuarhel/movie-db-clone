'use client'
import DetailHeaderSection from '@/components/detailHeaderSection'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { TvDetailsResponseStatusType } from '@/enums/enums'
import { getTvDetails } from '@/redux/action/tvAction'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { tv } from '@nextui-org/theme'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import TvDetailContent from './tvDetailsContent'
import { useDisclosure } from '@nextui-org/modal'
import ModalVideoPlayer from '@/app/components/modalVideoPlayer'

function TvDetailsPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { tvDetails, tvDetailsResponseStatus } = useAppSelector(state => state.movie)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    dispatch(getTvDetails(params.id))
  }, [dispatch, params.id])


  if (tvDetailsResponseStatus === TvDetailsResponseStatusType.pending)
    return <LoadingModal isOpen />
  if (tvDetailsResponseStatus === TvDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  return (
    <>
      <ModalVideoPlayer isOpen={isOpen} onOpenChange={onOpenChange} videoId='2m1drlOZSDw' />
      <TvDetailContent tvDetails={tvDetails} openTrailerModal={onOpen} />
    </>
  )
}

export default TvDetailsPage