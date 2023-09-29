import Link from 'next/link'
import React from 'react'

function FailedContent() {
  return (
    <div className='w-full h-max'>
      <div className='container mx-auto h-[90vh] flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <h1 className='mb-5'>Sorry we are under construction :(</h1>
          <Link href={'/'} className='hover:text-lightBlue'>
            <p>Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FailedContent