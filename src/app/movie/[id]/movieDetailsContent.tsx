'use client'
import { backdropUrlSizeW1280, posterUrlSizeOriginal, posterUrlSizeW342, profileUrlSizeW185, profileUrlSizeW300 } from '@/redux/api/endpoint'
import { IMovieDetailsResponse } from '@/types/movieDetailsType'
import { convertNumberToTimeFormat } from '@/utils/utlis'
import { Card, CardFooter } from '@nextui-org/card'
import { CircularProgress } from '@nextui-org/progress'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { MdBookmark, MdFavorite, MdPlayArrow, MdStar } from 'react-icons/md'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Divider } from '@nextui-org/divider'
import { Tooltip } from '@nextui-org/tooltip'
import ToolTipContent from '@/app/components/tooltipContent'
import CustomTooltip from '@/app/components/tooltipContent'

interface IMovieDetailContent {
  movieData: IMovieDetailsResponse
}
function MovieDetailContent(props: IMovieDetailContent) {
  const {
    movieData,
  } = props
  return (
    <main>
      <Section1 />
      <Section2 />
    </main>
  )

  function Section1() {
    return (
      <section className='w-full bg-cover bg-no-repeat text-white'
        style={{ backgroundImage: `url(${backdropUrlSizeW1280}${movieData.backdrop_path})` }}>
        <div className='bg-blend-screen bg-gray-950/70 p-10 bg-right'>
          <div className='container m-auto flex gap-10'>
            <div>
              <div className='max-h-[450px] max-w-[300px]'>
                <Image
                  src={posterUrlSizeW342 + movieData.poster_path}
                  alt={movieData.title}
                  width={340}
                  height={340}
                  className='rounded-xl' />
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='title mb-5'>
                <span className='text-4xl font-semibold mr-3'>{movieData.title}</span>
                <span className='text-gray-300 text-4xl font-light'>({movieData?.release_date?.slice(0, 4)})</span>
                <div>
                  <div className='flex gap-2 items-center'>
                    <span>{movieData?.release_date}</span>
                    <span>•</span>
                    {movieData.genres.map((e: any, i: number) =>
                      <React.Fragment key={i}>
                        <span key={i}>{e.name}</span>
                        {i !== movieData.genres.length - 1 ?
                          <span>{', '}</span> : null
                        }
                      </React.Fragment>
                    )}
                    <span>•</span>
                    <p>{convertNumberToTimeFormat(movieData.runtime)}</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <div className='flex items-center gap-2 mr-3'>
                  <div className='bg-darkBlue inline-flex rounded-full p-[2px]'>
                    <CircularProgress
                      aria-label='loading...'
                      size="lg"
                      value={movieData.vote_average * 10}
                      valueLabel={
                        <div className='flex'>
                          <p className='font-["Manrope"] text-xl'>{Math.floor(movieData.vote_average * 10)}</p>
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
                  <Link href='' className='flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-gray-400'>
                    <MdPlayArrow size={20} />
                    <p className='text-md'>Play Trailer</p>
                  </Link>
                </div>
              </div>
              <div>
                <p className='text-white/70 italic text-lg'>{movieData.tagline}</p>
                <p className='text-xl my-2'>Overview</p>
                <p className=''>{movieData.overview}</p>
              </div>
              <div className='flex gap-5 mt-5'>
                <div className='flex-1'>
                  <p>{movieData.credits.crew.find(e => e.job === 'Director')?.name}</p>
                  <p>Director</p>
                </div>
                <div className='flex-1'>
                  <p>{movieData.credits.crew.find(e => e.job === 'Producer')?.name}</p>
                  <p>Producer</p>
                </div>
                <div className='flex-1'>
                  <p>{movieData.credits.crew.find(e => e.job === 'Editor')?.name}</p>
                  <p>Editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section2() {
    return (
      <section>
        <div className='container m-auto py-8'>
          <div className="grid grid-cols-4 gap-4">
            <div className='col-span-3'>
              <p className='text-xl font-semibold mb-5'>Top Billed Cast</p>
              <div className='flex overflow-x-scroll overflow-y-hidden gap-5 pb-5 px-2'>
                {movieData.credits.cast.slice(0, 9).map((e, i) =>
                  <Card key={i}
                    radius='sm'
                    className='min-w-[150px]'
                    shadow='md'>
                    <Image
                      src={profileUrlSizeW300 + e.profile_path}
                      alt={e.name}
                      height={500}
                      width={300}
                      className='object-cover'
                      style={{
                        height: 'auto',
                        width: 'auto'
                      }}
                    />
                    <CardFooter >
                      <div>
                        <p className='font-bold'>{e.name}</p>
                        <p className='text-sm'>{e.character}</p>
                      </div>
                    </CardFooter>
                  </Card>
                )}
                <Link href={''} className='flex w-[100px]' >
                  <div className='flex items-center'>
                    <p className=''>View More</p>
                    <HiOutlineArrowNarrowRight size={20} />
                  </div>
                </Link>
              </div>
              <Link href={`/movie/${movieData.id}/cast`}>
                <p className='py-5 hover:text-gray-500 font-semibold'>Full & Cast Crew</p>
              </Link>
              <Divider className='my-3' />
              <div>
                <p className='text-2xl font-semibold'>Social</p>
              </div>
            </div>
            <div className=''>
              <div>
                <p className='flex flex-col mb-5'>
                  <strong>Original Title</strong>
                  {movieData.original_title}
                </p>
                <p className='flex flex-col mb-5'>
                  <strong>Status</strong>
                  {movieData.status}
                </p>
                <p className='flex flex-col mb-5'>
                  <strong>Budget</strong>
                  {movieData.budget}
                </p>
                <p className='flex flex-col mb-5'>
                  <strong>Revenue</strong>
                  {movieData.revenue}
                </p>
                <div>
                  <p className='font-bold mb-1'>Keywords</p>
                  <div className='flex gap-2 flex-wrap pb-7'>
                    {movieData.keywords.keywords.length !== 0 ?
                      movieData.keywords.keywords.map((e, i) =>
                        <p key={i}
                          className='border p-2 rounded-md cursor-pointer text-sm bg-lightGrey'>{e.name}</p>
                      ) : <p>No keywords have been added.</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default MovieDetailContent