"use client"
import Image from 'next/image'
import { BsImage } from 'react-icons/bs'
import { PiDotsThreeCircleFill } from 'react-icons/pi'
import CircularPercentage from './circularPercentage'
import Link from 'next/link'


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
  href?: string
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
function MovieCard(props: IMovieCard) {

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
    href = '#',
  } = props
  return (
    <div className={`${useShadow ? 'shadow-lg' : ''} rounded-lg ${bgColor}`}>
      <div className={`h-[${imgHeight}] w-[${imgWidth}] relative`}>
        <div className='absolute z-10 top-2 right-2 text-white opacity-50 hover:text-[rgb(1,180,228)] hover:opacity-100 cursor-pointer'>
          <PiDotsThreeCircleFill size={25} />
        </div>
        <Link href={href} className='cursor-pointer' scroll={false}>
          <div className='w-[150px] h-[225px]'>
            <Image
              priority
              src={imgSrc}
              alt={title}
              width={185}
              height={185}
              style={{
                width: '100%',
                height: '100%',
              }}
              className={`cursor-pointer ${imgStyle}`}
            />
          </div>
        </Link>
      </div>
      <div className={`min-h-[130px] relative pt-4 px-3 ${cardStyle}`}>
        <div className='absolute z-1 top-[-20px] left-[10px] '>
          <CircularPercentage value={rate} />
        </div>
        <Link href={href} className='cursor-pointer' scroll={false}>
          <p className='font-semibold pt-3 hover:text-lightBlue'>{title}</p>
        </Link>
        <p className='text-gray-400'>{releaseDate}</p>
      </div>
    </div>
  )

}

export function MovieCardPlaceholder() {
  return (
    <div>
      <div className={`h-[225px] w-[150px] bg-gray-200 rounded-lg flex items-center justify-center`}>
        <BsImage size={50} fill='grey' />
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