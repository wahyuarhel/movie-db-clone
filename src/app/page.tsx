"use client"
import CircularPercentage from '@/components/circularPercentage';
import MovieCard, { MovieCardPlaceholder } from '@/components/movieCard';
import { getPopularMovies } from '@/redux/action/movieAction';
import { imgUrl } from '@/redux/api/endpoint';
import { useAppDispatch, useAppSelector } from '@/redux/store/hook';
import { PopularMovieResultType } from '@/types/popularMovieType';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PopularMoviesResponseEnum } from '@/enums/enums';
import { HeaderHome } from './components/headerHome';


export default function Home() {
  const dispatch = useAppDispatch()
  const {
    popularMovies,
    loading,
    popularMovieResponse
  } = useAppSelector(state => state.movie)

  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])
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
        <TrendingMovie trendingToday={popularMovies.results} trendingWeek={trendingThisWeek} />
      </div>
    </main>
  )
}

const trendingThisWeek = [
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
  { title: 'movie title', date: 'movie date', img: 'movie cover img', rate: Math.floor(Math.random() * 10) },
]

interface TrendingMovieProps {
  trendingToday: PopularMovieResultType[],
  trendingWeek: { title: string; date: string; img: string; rate: number; }[],
}
/**
```
interface TrendingMovieProps {
  trendingToday: PopularMovieResultType[],
  trendingWeek: { title: string; date: string; img: string; rate: number; }[],
}
```
 */
function TrendingMovie(props: TrendingMovieProps) {
  const {
    trendingToday,
    trendingWeek
  } = props
  const [isToday, setIsToday] = useState(true)
  function onClickSwitch() {
    setIsToday(!isToday);
  }

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
      <div className='flex gap-5 px-10 py-10 overflow-x-scroll'>
        {isToday ?
          trendingToday == undefined ?
            Array.from(Array(10), (_, i) =>
              <React.Fragment key={i}>
                <MovieCardPlaceholder />
              </React.Fragment>
            )
            :
            trendingToday?.map((movie: PopularMovieResultType) =>
              <MovieCard
                key={movie.id}
                imgSrc={`${imgUrl}${movie.poster_path}`}
                title={movie.title}
                rate={movie.vote_average}
                releaseDate={movie.release_date}
                cardStyle='border-none'
                useShadow={false}
                useBorder={false}
              />
            )
          :
          trendingWeek.map((movie, i: number) =>
            <div key={i}>
              <div className='h-[230px] w-[150px] border rounded-lg'>
                {movie?.img}
              </div>
              <div className='relative pt-4'>
                <div className='absolute z-1 top-[-20px] left-[10px] '>
                  <CircularPercentage value={movie?.rate} />
                </div>
                <p className='font-semibold pt-3'>{movie?.title}</p>
                <p className='text-gray-400'>{movie?.date}</p>
              </div>
            </div>
          )

        }
      </div >
    </section >
  )
}