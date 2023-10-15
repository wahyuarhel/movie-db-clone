import ModalVideoPlayer from '@/app/components/modalVideoPlayer'
import CustomTooltip from '@/app/components/tooltipContent'
import { backdropUrlSizeW1280, posterUrlSizeW342 } from '@/redux/api/endpoint'
import { ICrewMemberDetail, IGenreResponse } from '@/types/movieDetailsType'
import { ICreatedBy } from '@/types/tvDetailType'
import { Utils } from '@/utils/utils'
import { CircularProgress } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { MdBookmark, MdFavorite, MdPlayArrow, MdStar } from 'react-icons/md'

interface DetailHeaderSectionProp {
  backdropPath: string
  posterPath: string
  title: string,
  releaseDate?: string,
  firstAirDate?: string,
  runTime?: number,
  voteAverage: number
  tagline: string,
  overview: string,
  crew?: ICrewMemberDetail[],
  createdBy?: ICreatedBy[],
  genres: IGenreResponse[],
  onOpenTrailerModal: () => void

}
const DetailHeaderSection = (props: DetailHeaderSectionProp) => {
  const {
    backdropPath,
    posterPath,
    title,
    releaseDate,
    firstAirDate,
    runTime,
    voteAverage,
    tagline,
    overview,
    crew,
    genres,
    createdBy,
    onOpenTrailerModal
  } = props

  const year = releaseDate?.slice(0, 4) ?? firstAirDate?.slice(0, 4)
  return (
    <section className='w-full bg-cover bg-no-repeat text-white bg-top'
      style={{ backgroundImage: `url(${backdropUrlSizeW1280}${backdropPath})` }}>
      <div className={`bg-blend-screen bg-gray-950/60 p-10`}>
        <div className='container m-auto flex gap-10'>
          <div>
            <div className='h-[450px] w-[300px]'>
              <Image
                id='imagePoster'
                priority
                src={posterUrlSizeW342 + posterPath}
                alt={title ?? 'poster path'}
                width={340}
                height={340}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                className='rounded-xl object-cover' />
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='title mb-5'>
              <span className='text-4xl font-semibold mr-3'>{title}</span>
              <span className='text-gray-300 text-4xl font-light'>({year})</span>
              <div>
                <div className='flex gap-2 items-center'>
                  {releaseDate !== undefined &&
                    <div>
                      <span>{releaseDate}</span>
                      <span>•</span>
                    </div>
                  }
                  {genres?.map((e: any, i: number) =>
                    <div key={i}>
                      <span key={i}>{e.name}</span>
                      {i !== genres.length - 1 && <span>{','}</span>}
                    </div>
                  )}
                  {runTime !== undefined &&
                    <div>
                      <span>•</span>
                      <p>{Utils.convertNumberToTimeFormat(runTime)}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className='flex items-center mb-5'>
              <div className='flex items-center gap-2 mr-3'>
                <div className='bg-darkBlue inline-flex rounded-full p-[2px]'>
                  <CircularProgress
                    aria-label='loading...'
                    size="lg"
                    value={voteAverage !== undefined ? voteAverage * 10 : 0}
                    valueLabel={
                      <div className='flex'>
                        <p className='font-["Manrope"] text-xl'>{voteAverage !== undefined ? (Math.floor(voteAverage * 10)) : 0}</p>
                        <p className='font-["Manrope"] text-[7px] pt-[5px]'>%</p>
                      </div>
                    }
                    showValueLabel={true}
                    strokeWidth={3}
                    classNames={{
                      svg: 'w-[60px] h-[60px]',
                      indicator: "stroke-accountGreen",
                      track: "stroke-accountGreen/10",
                      label: ''
                    }}
                  />
                </div>
                <span className='font-semibold'>User<br />Score</span>
              </div>
              <CustomTooltip label='Login to create and edit custom lists'>
                <Link href='' className='rounded-full p-4 bg-darkBlue mr-5'>
                  <FaList size={16} />
                </Link>
              </CustomTooltip>
              <CustomTooltip label='Login to add this movie to your favorite list'>
                <Link href='' className='rounded-full p-4 bg-darkBlue mr-5'>
                  <MdFavorite size={16} />
                </Link>
              </CustomTooltip>
              <CustomTooltip label='Login to add this movie to your watchlist'>
                <Link href='' className='rounded-full p-4 bg-darkBlue mr-5'>
                  <MdBookmark size={16} />
                </Link>
              </CustomTooltip>
              <CustomTooltip label='Login to rate this movie'>
                <Link href='' className='rounded-full p-4 bg-darkBlue mr-5'>
                  <MdStar size={16} />
                </Link>
              </CustomTooltip>
              <div>
                <div className='flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-gray-400 cursor-pointer'
                  onClick={onOpenTrailerModal}
                >
                  <MdPlayArrow size={20} />
                  <p className='text-md'>Play Trailer</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-white/70 italic text-lg'>{tagline}</p>
              <p className='text-xl my-2'>Overview</p>
              <p className=''>{overview}</p>
            </div>
            <div className='flex gap-5 mt-5'>
              {crew !== undefined &&
                <>
                  <div className='flex-1'>
                    <p>{crew?.find(e => e.job === 'Director')?.name}</p>
                    <p>Director</p>
                  </div>
                  <div className='flex-1'>
                    <p>{crew?.find(e => e.job === 'Producer')?.name}</p>
                    <p>Producer</p>
                  </div>
                  <div className='flex-1'>
                    <p>{crew?.find(e => e.job === 'Editor')?.name}</p>
                    <p>Editor</p>
                  </div>
                </>
              }
              {(createdBy !== undefined && createdBy.length !== 0) &&
                <div className='flex-1'>
                  <p>{createdBy[0].name}</p>
                  <p>Creator</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailHeaderSection
