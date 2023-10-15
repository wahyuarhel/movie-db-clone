import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import YouTube from 'react-youtube'

interface IModalVideoPlayerProp {
  isOpen: boolean
  onOpenChange(): void
  videoId: string
}

function ModalVideoPlayer(props: IModalVideoPlayerProp) {
  const {
    isOpen,
    onOpenChange,
    videoId
  } = props

  return (
    <Modal isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='5xl'
      classNames={{
        base: 'rounded-sm bg-black text-white',
      }}
    >
      <ModalContent>
        <ModalHeader>Official Trailer</ModalHeader>
        <ModalBody className='p-0'>
          <YouTube
            id='youtube_player'
            videoId={videoId}
            iframeClassName='w-full h-[50dvh] xl:h-[70dvh]'
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalVideoPlayer