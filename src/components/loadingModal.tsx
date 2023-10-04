import { CircularProgress } from '@nextui-org/progress'
import React from 'react'

interface ILoadingModal {
  isOpen: boolean
}
function LoadingModal(props: ILoadingModal) {
  const { isOpen = false } = props
  console.log('isOpen:', isOpen)
  return (
    <div className={`h-[100vh] w-[100%] bg-black/30 fixed z-[101] top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
      <CircularProgress
        aria-label='loading...'
        size='lg'
        classNames={{
          indicator: 'stroke-darkBlue'
        }} />
    </div>
  )
}
export default LoadingModal