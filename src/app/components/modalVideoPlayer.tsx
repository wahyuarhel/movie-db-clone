import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal'
import React from 'react'
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
    videoId = ''
  } = props

  return (
    <Modal isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='5xl'
      classNames={{
        base: 'rounded-sm bg-black text-white'
      }}
    >
      <ModalContent>
        <ModalHeader>Official Trailer</ModalHeader>
        <ModalBody className='p-0'>
          <YouTube
            videoId={videoId}
            iframeClassName='w-full h-[400px] xl:h-[70vh]'
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalVideoPlayer