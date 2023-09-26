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
  imgBorderRadiusStyle?: string
  cardBorderRadiusStyle?: string
}

function MovieCard(props: IMovieCard) {
  const {
    bgColor = '#fff',
    imgSrc = '',
    title,
    rate,
    releaseDate,
    imgWidth = '150px',
    imgHeight = '230px',
    useShadow = true,
    imgBorderRadiusStyle = 'rounded-lg',
    cardBorderRadiusStyle = 'border rounded-lg',
  } = props
  return (
    <div className={`${useShadow ? 'shadow-lg' : ''} bg-[${bgColor}] rounded-lg`}>
      <div className={`h-[${imgHeight}] w-[${imgWidth}] relative`}>
        <div className='absolute z-1 top-2 right-2 text-white opacity-50 hover:text-[rgb(1,180,228)] hover:opacity-100 cursor-pointer'>
          <PiDotsThreeCircleFill size={25} />
        </div>
        <Image src={imgSrc}
          alt={title}
          width="100" height="100"
          className={`${imgBorderRadiusStyle} cursor-pointer`}
          style={{ width: '100%', height: '100%' }} />
      </div>
      <div className={`${cardBorderRadiusStyle} min-h-[130px] relative pt-4 px-3`}>
        <div className='absolute z-1 top-[-20px] left-[10px] '>
          <CircularPercentage value={rate} />
        </div>
        <p className='font-semibold pt-3'>{title}</p>
        <p className='text-gray-400'>{releaseDate}</p>
      </div>
    </div>
  )
}




export default MovieCard