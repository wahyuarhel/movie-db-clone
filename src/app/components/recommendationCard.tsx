import React from "react"
import Image from "next/image"
import { backdropUrlSizeW300 } from "@/redux/api/endpoint"

interface IRecommendationCard {
  title: string
  imgSrc: string,
  rate: number
}
function RecommendationCard(props: IRecommendationCard) {
  return (
    <div >
      <div className='w-[250px] h-[141px]'>
        <Image
          src={backdropUrlSizeW300 + props.imgSrc}
          alt={props.title}
          priority
          width={185}
          height={185}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          className='rounded-md'
        />
      </div>
      <div className='grid grid-cols-6 gap-2'>
        <p className='col-span-5 truncate ...'>{props.title}</p>
        <span className='text-sm flex justify-end items-center'>{Math.round(props.rate * 10)}%</span>
      </div>
    </div>
  )
}

export default RecommendationCard