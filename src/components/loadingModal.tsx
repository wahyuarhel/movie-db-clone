import { CircularProgress } from '@nextui-org/progress'
import React from 'react'

function LoadingModal() {
  return (
    <div className='h-[calc(100vh-64px)] w-[100%] bg-black/30 fixed z-10 top-[64px] flex items-center justify-center overflow-hidden '>
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