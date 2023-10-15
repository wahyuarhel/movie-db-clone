'use client'
import RecommendationCard from '@/app/components/recommendationCard'
import DetailHeaderSection from '@/components/detailHeaderSection'
import { profileUrlSizeW185 } from '@/redux/api/endpoint'
import { IMovieDetailsResponse } from '@/types/movieDetailsType'
import { IRecommendationMovieResponse } from '@/types/recommendationType'
import { Utils } from '@/utils/utils'
import { Card, CardBody } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { useDisclosure } from '@nextui-org/modal'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { IoStar } from 'react-icons/io5'

interface IMovieDetailContent {
  movieData: IMovieDetailsResponse
  recommendationMovieById?: IRecommendationMovieResponse
}
function MovieDetailContent(props: IMovieDetailContent) {
  const {
    movieData,
    recommendationMovieById
  } = props



  const reviews = movieData?.reviews?.results
  const getRandomIndex = Utils.generateRandomNumber(reviews.length)
  const filterReviewThatHaveRate = movieData?.reviews?.results?.filter((item) => item.author_details.rating !== null)
  function truncate(str: string) {
    return str?.length > 700 ? str.substring(0, 699) + "..." : str;
  }

  return (
    <>
      <main>
        <Section1 />
        <Section2 />
      </main>
    </>
  )


  function Section1() {
    return (
      <DetailHeaderSection
        backdropPath={movieData.backdrop_path}
        posterPath={movieData.poster_path}
        title={movieData.title}
        releaseDate={movieData.release_date}
        runTime={movieData.runtime}
        voteAverage={movieData.vote_average}
        tagline={movieData.tagline}
        overview={movieData.overview}
        crew={movieData.credits.crew}
        genres={movieData.genres}
        videoId={movieData.videos.results[0].key}
      />
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
              <RecommendationContent />
              <Divider className='mt-10 mb-5' />
              <ReviewContent />
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
          <div className='flex items-center gap-2'>
            <p className='font-semibold'>Reviews</p>
            <p className='bg-gray-500 rounded-full px-2 text-white'>{reviews.length}</p>
          </div>
          <Card className='my-3' radius='sm'>
            <CardBody>
              <div className={'flex gap-3'}>
                <p className='text-white rounded-full  bg-darkBlue w-[45px] h-[45px] flex items-center justify-center'>
                  {filterReviewThatHaveRate[getRandomIndex]?.author[0]}
                </p>
                <div>
                  <p className='font-semibold text-xl'>A review by {filterReviewThatHaveRate[getRandomIndex]?.author}</p>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1 text-sm text-white bg-darkBlue px-1 rounded-sm'>
                      <IoStar size={10} />
                      <span className='font-semibold'>{filterReviewThatHaveRate[getRandomIndex]?.author_details.rating?.toFixed(1)}</span>
                    </div>
                    <p className='text-sm'>Written by
                      <span className='font-semibold ml-1'>{filterReviewThatHaveRate[getRandomIndex]?.author}</span>
                      <span className='ml-1'>on {Utils.formateDateToString(filterReviewThatHaveRate[getRandomIndex]?.created_at, 'MMMM DD, YYYY')}</span>
                    </p>
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
        <p className='text-xl font-semibold mb-3'>Recommendations</p>
        {recommendationMovieById?.total_results !== 0 ?
          <ScrollShadow
            orientation="horizontal"
            className='flex gap-5 pb-5 px-2 items-stretch'>
            {recommendationMovieById?.results?.slice(0, 9).map((e, i) =>
              <RecommendationCard
                key={i}
                title={e.title}
                imgSrc={e.backdrop_path}
                rate={e.vote_average}
              />
            )}
          </ScrollShadow >
          : <p>{`We don't have enough data to suggest any movies based on ${movieData.title} . You can help by rating movies you've seen`}</p>}
      </div>
    )
  }



}

export default MovieDetailContent