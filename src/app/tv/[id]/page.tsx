'use client'
import ModalVideoPlayer from '@/app/components/modalVideoPlayer'
import FailedContent from '@/components/failedContent'
import LoadingModal from '@/components/loadingModal'
import { TvDetailsResponseStatusType } from '@/enums/enums'
import { getTvDetails } from '@/redux/action/tvAction'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { useDisclosure } from '@nextui-org/modal'
import { useParams, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import TvDetailContent from './tvDetailsContent'

function TvDetailsPage() {
  const params = useParams()
  const pathName = usePathname()
  const dispatch = useAppDispatch()
  const { tvDetails, tvDetailsResponseStatus } = useAppSelector(state => state.movie)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    dispatch(getTvDetails(params.id))
  }, [dispatch, params.id])

  console.log('pathName:', pathName.includes('/tv/'))

  if (tvDetailsResponseStatus === TvDetailsResponseStatusType.pending)
    return <LoadingModal isOpen />
  else if (tvDetailsResponseStatus === TvDetailsResponseStatusType.rejected)
    return (<FailedContent />)
  else return (
    <>
      <ModalVideoPlayer isOpen={isOpen} onOpenChange={onOpenChange} videoId='2m1drlOZSDw' />
      <TvDetailContent tvDetails={tvDetails} openTrailerModal={onOpen} />
    </>
  )
}

export default TvDetailsPage