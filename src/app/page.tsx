/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import MovieCard, { MovieCardPlaceholder } from '@/components/movieCard';
import { fetchMovieDetails, getPopularMovies, getTrendingAllThisWeek, getTrendingAllToday } from '@/redux/action/movieAction';
import { posterUrlSizeW185, posterUrlSizeW342 } from '@/redux/api/endpoint';
import { useAppDispatch, useAppSelector } from '@/redux/store/hook';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { HeaderHome } from './components/headerHome';
import { MediaType, MovieDetailsResponseStatusType, PopularMoviesResponseType } from '@/enums/enums';
import { useRouter } from 'next/navigation';
import LoadingModal from '@/components/loadingModal';
import FailedContent from '@/components/failedContent';


export default function Home() {
  const dispatch = useAppDispatch()
  const {
    popularMovies,
    popularMovieResponse,
    movieDetailsResponse
  } = useAppSelector(state => state.movie)

  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])
  const randomIndex = Math.floor(Math.random() * 10)

  return (
    <main>
      <div className='container m-auto'>
        {popularMovieResponse == PopularMoviesResponseType.fulfilled ?
          <HeaderHome
            backgroundImage={popularMovies.results[randomIndex].backdrop_path} />
          :
          <HeaderHome loading />
        }
        <TrendingMovie />
      </div>
    </main>
  );
}

function TrendingMovie() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const [isToday, setIsToday] = useState(true)
  const {
    trendingAllThisToday,
    trendingAllThisWeek,
  } = useAppSelector(state => state.movie)

  function onClickSwitch() {
    setIsToday(!isToday);
    if (ref.current !== null) {
      console.log('ref.current:', ref)
      ref.current.scroll({ left: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    dispatch(getTrendingAllToday())
    dispatch(getTrendingAllThisWeek())
  }, [])


  return (
    <section className='pt-5 bg-no-repeat bg-[center_bottom_3rem]'
      style={{ backgroundImage: "url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')" }}>
      <div className='px-10 flex gap-5 items-center'>
        <p className='text-2xl font-semibold'>Trending</p>
        <div className='flex border border-black rounded-full' >
          <Link href='' className={`${isToday ? 'bg-[#032541]' : 'bg-[transparent]'} rounded-full`} onClick={onClickSwitch}>
            <p className={`${!isToday ? 'text-black' : 'text-transparent'} px-3 py-1 font-semibold bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] `}>Today</p>
          </Link>
          <Link href='' className={`${isToday ? 'bg-transparent' : 'bg-[#032541]'} rounded-full`} onClick={onClickSwitch}>
            <p className={`${isToday ? 'text-black' : 'text-transparent'} px-3 py-1 font-semibold bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]`}>This Week</p>
          </Link>
        </div>
      </div>
      <div ref={ref} className='flex gap-5 px-10 py-10 overflow-x-scroll'>
        {isToday ?
          trendingAllThisToday.results !== undefined ?
            trendingAllThisToday.results.map((movie) =>
              <MovieCard
                key={movie.id}
                href={movie.media_type == MediaType.movie ? `/movie/${movie.id}` : `/tv/${movie.id}`}
                imgSrc={posterUrlSizeW185 + movie.poster_path}
                title={movie.media_type === MediaType.movie ? movie.title : movie.name}
                rate={movie.vote_average}
                releaseDate={movie.media_type === MediaType.movie ? movie.release_date : movie.first_air_date}
                cardStyle='border-none'
                useShadow={false}
                useBorder={false}
              />
            )
            : Array.from(Array(10), (_, i) =>
              <React.Fragment key={i}>
                <MovieCardPlaceholder />
              </React.Fragment>
            )
          : trendingAllThisWeek.results !== undefined ?
            trendingAllThisWeek.results.map((movie) =>
              <MovieCard
                key={movie.id}
                imgSrc={`${posterUrlSizeW342}${movie.poster_path}`}
                title={movie.media_type == MediaType.movie ? movie.title : movie.name}
                rate={movie.vote_average}
                releaseDate={movie.media_type == MediaType.movie ? movie.release_date : movie.first_air_date}
                cardStyle='border-none'
                useShadow={false}
                useBorder={false}
              />
            )
            : Array.from(Array(10), (_, i) =>
              <React.Fragment key={i}>
                <MovieCardPlaceholder />
              </React.Fragment>
            )
        }
      </div >
    </section >
  )
}
interface LatestTrailerContentProps {

}
function LatestTrailerContent(props: LatestTrailerContentProps) {
  return (
    <div className='pt-5 bg-darkBlue bg-blend-screen'>
      <div className='flex items-center gap-5 pb-5 px-10'>
        <p className='text-2xl font-semibold text-white'>Latest Trailers</p>
        <ChoiceButtons label={buttonFill} />
      </div>
      <div>
      </div>
    </div>
  )
}


interface ChoiceButtonsPropsType {
  label: string[],
}
function ChoiceButtons(props: ChoiceButtonsPropsType): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  function onClicked(idx: number) {
    setSelectedIndex(idx)
  }
  function bgColorSelected(i: number) {
    if (selectedIndex === i) return 'bg-gradient-to-r from-lighterGreen to-lightGreen rounded-full'
    else return ''
  }
  function textColor(i: number): string { return selectedIndex === i ? 'text-darkBlue' : 'text-white' }
  return (
    <div className='inline-flex border border-lightGreen rounded-full'>
      {props.label.map((e, i) =>
        <div key={i}
          className={`px-5 py-1 ${bgColorSelected(i)}`}>
          <p className={`cursor-pointer ${textColor(i)} relative  z-10`}
            onClick={() => onClicked(i)}
          >{e}</p>
        </div>
      )}
    </div >
  )
}

const buttonFill: string[] = ['Popular', 'Streaming', 'On Tv', 'For Rent', 'In Theaters',]
