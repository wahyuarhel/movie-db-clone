"use client"
import React from 'react'
import CircularPercentage from './circularPercentage'
import Image from 'next/image'
import { PiDotsThreeCircleFill } from 'react-icons/pi'


interface IMovieCard {
  imgSrc: string
  title: string
  rate: number
  releaseDate: string
  bgColor?: string
  imgHeight?: string
  imgWidth?: string
  useShadow?: boolean
  useBorder?: boolean
  imgStyle?: string
  cardStyle?: string
}

/**
```ts
interface IMovieCard {
  imgSrc: string
  title: string
  rate: number
  releaseDate: string
  bgColor?: string
  imgHeight?: string
  imgWidth?: string
  useShadow?: boolean
  useBorder?: boolean
  imgStyle?: string
  cardStyle?: string
}
```
`
*/
function MovieCard(
  props
    : IMovieCard) {

  const {
    bgColor,
    imgSrc = '',
    title,
    rate,
    releaseDate,
    imgWidth = '150px',
    imgHeight = '230px',
    useShadow = true,
    imgStyle = 'rounded-lg',
    cardStyle = 'border rounded-lg',
  } = props
  return (
    <div className={`${useShadow ? 'shadow-lg' : ''} rounded-lg ${bgColor}`}>
      <div className={`h-[${imgHeight}] w-[${imgWidth}] relative`}>
        <div className='absolute z-1 top-2 right-2 text-white opacity-50 hover:text-[rgb(1,180,228)] hover:opacity-100 cursor-pointer'>
          <PiDotsThreeCircleFill size={25} />
        </div>
        <Image
          src={imgSrc}
          alt={title}
          className={`cursor-pointer ${imgStyle}`}
          sizes='150'
          fill
        />
      </div>
      <div className={`min-h-[130px] relative pt-4 px-3 ${cardStyle}`}>
        <div className='absolute z-1 top-[-20px] left-[10px] '>
          <CircularPercentage value={rate} />
        </div>
        <p className='font-semibold pt-3'>{title}</p>
        <p className='text-gray-400'>{releaseDate}</p>
      </div>
    </div>
  )

}

export function MovieCardPlaceholder() {
  return (
    <div>
      <div className={`h-[230px] w-[150px] bg-gray-200 rounded-lg`}>
      </div>
      <div className=' h-[100px] w-[150px] relative pt-4 px-3'>
        <div className='absolute z-1 top-[-20px] left-[10px] '>
          <CircularPercentage value={0} />
        </div>
      </div>
    </div>
  )

}


export default MovieCard