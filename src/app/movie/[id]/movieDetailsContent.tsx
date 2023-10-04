'use client'
import ModalVideoPlayer from '@/app/components/modalVideoPlayer'
import CustomTooltip from '@/app/components/tooltipContent'
import { backdropUrlSizeW1280, posterUrlSizeW342, profileUrlSizeW185 } from '@/redux/api/endpoint'
import { IMovieDetailsResponse } from '@/types/movieDetailsType'
import { Utils } from '@/utils/utlis'
import { Card, CardBody } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Divider } from '@nextui-org/divider'
import { useDisclosure } from '@nextui-org/modal'
import { CircularProgress } from '@nextui-org/progress'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaList } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { IoStar } from 'react-icons/io5'
import { MdBookmark, MdFavorite, MdPlayArrow, MdStar } from 'react-icons/md'

interface IMovieDetailContent {
  movieData: IMovieDetailsResponse
}
function MovieDetailContent(props: IMovieDetailContent) {
  const {
    movieData,
  } = props

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const reviews = movieData?.reviews?.results
  const getRandomIndex = Utils.generateRandomNumber(reviews.length)
  const filterReviewThatHaveRate = movieData?.reviews?.results?.filter((item) => item.author_details.rating !== null)
  function truncate(str: string) {
    return str?.length > 700 ? str.substring(0, 699) + "..." : str;
  }

  return (
    <>
      <ModalVideoPlayer isOpen={isOpen} onOpenChange={onOpenChange} videoId='2m1drlOZSDw' />
      <main>
        <Section1 />
        <Section2 />
      </main>
    </>
  )


  function Section1() {
    return (
      <section className='w-full bg-cover bg-no-repeat text-white'
        style={{ backgroundImage: `url(${backdropUrlSizeW1280}${movieData.backdrop_path})` }}>
        <div className={`bg-blend-screen bg-gray-950/60 p-10 bg-right`}>
          <div className='container m-auto flex gap-10'>
            <div>
              <div className='h-[450px] w-[300px]'>
                <Image
                  id='imagePoster'
                  priority
                  src={posterUrlSizeW342 + movieData.poster_path}
                  alt={movieData.title}
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
                <span className='text-4xl font-semibold mr-3'>{movieData.title}</span>
                <span className='text-gray-300 text-4xl font-light'>({movieData?.release_date?.slice(0, 4)})</span>
                <div>
                  <div className='flex gap-2 items-center'>
                    <span>{movieData?.release_date}</span>
                    <span>•</span>
                    {movieData.genres?.map((e: any, i: number) =>
                      <React.Fragment key={i}>
                        <span key={i}>{e.name}</span>
                        {i !== movieData.genres.length - 1 ?
                          <span>{', '}</span> : null
                        }
                      </React.Fragment>
                    )}
                    <span>•</span>
                    <p>{Utils.convertNumberToTimeFormat(movieData.runtime)}</p>
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
                  <div className='flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-gray-400 cursor-pointer'
                    onClick={onOpen}
                  >
                    <MdPlayArrow size={20} />
                    <p className='text-md'>Play Trailer</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-white/70 italic text-lg'>{movieData.tagline}</p>
                <p className='text-xl my-2'>Overview</p>
                <p className=''>{movieData.overview}</p>
              </div>
              <div className='flex gap-5 mt-5'>
                <div className='flex-1'>
                  <p>{movieData.credits?.crew?.find(e => e.job === 'Director')?.name}</p>
                  <p>Director</p>
                </div>
                <div className='flex-1'>
                  <p>{movieData.credits?.crew?.find(e => e.job === 'Producer')?.name}</p>
                  <p>Producer</p>
                </div>
                <div className='flex-1'>
                  <p>{movieData.credits?.crew?.find(e => e.job === 'Editor')?.name}</p>
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
              <ScrollShadow
                orientation="horizontal"
                className='flex gap-5 pb-5 px-2 items-stretch'>
                {movieData.credits?.cast.slice(0, 9).map((e, i) =>
                  <div key={i} className='rounded-md shadow-md'>
                    <div className='w-[137px] h-[175px]'>
                      <Image
                        src={profileUrlSizeW185 + e.profile_path}
                        alt={e.name}
                        priority
                        width={185}
                        height={185}
                        style={{
                          width: '100%',
                          height: '100%',
                          // objectFit: 'cover'
                        }}
                        className='rounded-t-md object-cover object-top'
                      />
                    </div>
                    <div className='p-2'>
                      <p className='font-bold'>{e.name}</p>
                      <p className='text-sm'>{e.character}</p>
                    </div>
                  </div>
                )}
                <div className='flex w-[137px] px-5'>
                  <Link href={`/movie/${movieData.id}/cast`} className='flex  items-center w-max gap-1' >
                    <p className='font-bold'>View More</p>
                    <HiOutlineArrowNarrowRight size={20} />
                  </Link>
                </div>
              </ScrollShadow>
              <Link href={`/movie/${movieData.id}/cast`}>
                <p className='py-5 hover:text-gray-500 font-semibold'>Full & Cast Crew</p>
              </Link>
              <Divider className='mb-5' />
              <ReviewContent />
              <Divider className='mt-10 mb-5' />
              <RecommendationContent />
            </div>
            <RightContent />
          </div>
        </div>
      </section >
    )
  }

  function RightContent() {
    return (
      <div className=''>
        <div>
          <p className='flex flex-col mb-5'>
            <strong>Status</strong>
            {movieData.status}
          </p>
          <p className='flex flex-col mb-5'>
            <strong>Original Language</strong>
            {movieData.original_language}
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
              {movieData.keywords?.keywords.length !== 0 ?
                movieData.keywords?.keywords.map((e, i) =>
                  <p key={i}
                    className='border p-2 rounded-md cursor-pointer text-sm bg-lightGrey'>{e.name}</p>
                ) : <p>No keywords have been added.</p>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ReviewContent() {
    if (movieData.reviews?.total_results !== 0) {
      return (
        <div className=''>
          <p className='font-semibold'>Reviews <Chip size='sm'>{reviews.length}</Chip></p>
          <Card className='my-3' radius='sm'>
            <CardBody>
              <div className={'flex gap-3'}>
                <p className='text-white rounded-full  bg-darkBlue w-[45px] h-[45px] flex items-center justify-center'>
                  {filterReviewThatHaveRate[getRandomIndex]?.author[0]}
                </p>
                <div>
                  <p className='font-semibold text-xl'>A review by {filterReviewThatHaveRate[getRandomIndex]?.author}</p>
                  <div>
                    <p className='text-sm'>
                      <span className='bg-darkBlue text-white px-2 rounded-md mr-2 inline-flex items-center' ><IoStar className='mr-1' size={10} /> {filterReviewThatHaveRate[getRandomIndex]?.author_details.rating?.toFixed(1)}</span>
                      Written by
                      <span className='font-semibold'>{filterReviewThatHaveRate[getRandomIndex]?.author}</span>
                      on
                      <span>{Utils.formateDateToString(filterReviewThatHaveRate[getRandomIndex]?.created_at, 'MMMM DD, YYYY')}</span></p>
                  </div>
                </div>
              </div>
              <div className='flex items-end'>
                <p className='text-sm mt-3 '>
                  {truncate(filterReviewThatHaveRate[getRandomIndex]?.content)}
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      )

    }
    else {
      return <p className='py-3'>There are no discussions for Reptile. Login to be first!</p>
    }
  }

  function RecommendationContent() {
    return (
      <div>
        <p className='text-xl font-semibold mb-3'>Recommendation Content</p>
        <ScrollShadow
          orientation="horizontal"
          className='flex gap-5 pb-5 px-2 items-stretch'>
          {movieData.credits?.cast.slice(0, 9).map((e, i) =>
            <div key={i} className=''>
              <div className='w-[250px] h-[141px]'>
                <Image
                  src={profileUrlSizeW185 + e.profile_path}
                  alt={e.name}
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
                <p className='col-span-5 truncate ...'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim voluptas qui error excepturi amet harum in voluptatibus rem ex! Ullam necessitatibus enim ipsa saepe voluptatem autem illo id quaerat debitis!</p>
                <span className='text-sm flex justify-end items-center'>75%</span>
              </div>
            </div>
          )}
        </ScrollShadow >
      </div>
    )
  }

}

export default MovieDetailContent