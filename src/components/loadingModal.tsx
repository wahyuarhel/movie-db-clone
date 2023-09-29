import { CircularProgress } from '@nextui-org/progress'
import React from 'react'

function LoadingModal() {
  return (
    <div className='h-full w-full bg-black/30 fixed flex items-center justify-center'>
      <CircularProgress aria-label='loading...' size='lg' classNames={{
        indicator: 'stroke-darkBlue'
      }} />
    </div>
  )
}
export default LoadingModal