/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import MovieCard, { MovieCardPlaceholder } from '@/components/movieCard';
import { MediaTypeEnum, PopularMoviesResponseEnum } from '@/enums/enums';
import { getPopularMovies, getTrendingAllThisWeek, getTrendingAllToday } from '@/redux/action/movieAction';
import { imgUrl } from '@/redux/api/endpoint';
import { useAppDispatch, useAppSelector } from '@/redux/store/hook';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { HeaderHome } from './components/headerHome';


export default function Home() {
  const dispatch = useAppDispatch()
  const {
    popularMovies,
    popularMovieResponse,
  } = useAppSelector(state => state.movie)

  useEffect(() => {
    dispatch(getPopularMovies())
  }, [])
  const randomIndex = Math.floor(Math.random() * 10)

  return (
    <main>
      <div className='container m-auto'>
        {popularMovieResponse == PopularMoviesResponseEnum.fulfilled ?
          <HeaderHome
            backgroundImage={popularMovies.results[randomIndex].backdrop_path} />
          :
          <HeaderHome loading />
        }
        <TrendingMovie />
      </div>
    </main>
  )
}

function TrendingMovie() {
  const dispatch = useAppDispatch()
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
    <section className='py-5 bg-no-repeat bg-[center_bottom_3rem]'
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
                imgSrc={`${imgUrl}${movie.poster_path}`}
                title={movie.media_type == MediaTypeEnum.movie ? movie.title : movie.name}
                rate={movie.vote_average}
                releaseDate={movie.media_type == MediaTypeEnum.movie ? movie.release_date : movie.first_air_date}
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
                imgSrc={`${imgUrl}${movie.poster_path}`}
                title={movie.media_type == MediaTypeEnum.movie ? movie.title : movie.name}
                rate={movie.vote_average}
                releaseDate={movie.media_type == MediaTypeEnum.movie ? movie.release_date : movie.first_air_date}
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