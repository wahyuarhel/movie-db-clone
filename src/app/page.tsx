"use client"
import CircularPercentage from '@/components/circularPercentage';
import { apiKey, imgUrl, movieUrl } from '@/redux/api/endpoint';
import { setPopularMovies } from '@/redux/slice/movieSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/hook';
import { PopularMovieResultType } from '@/types/popularMovieType';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Home() {
  return (
    <main>
      <div className='container m-auto'>
        <HeaderHome />
        <Section2 />
      </div>
    </main>
  )
}

function HeaderHome() {
  const dispatch = useAppDispatch()
  const { popularMovies } = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(setPopularMovies(popularMovies))
  }, [dispatch, popularMovies])
  console.log('popular movies: ', popularMovies)

  return (
    <section>
      <div className={`px-[40px] py-[120px]`} >
        <p className='text-5xl text-white font-semibold'>Welcome.</p>
        <p className='text-3xl text-white pb-10'>Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <SearchBar />
      </div>
    </section>
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
function Section2() {
  const [movies, setMovies] = useState([])
  const [isToday, setIsToday] = useState(true)


  async function _getMovies() {
    try {
      const response = await axios.get(`${movieUrl}movie/popular?${apiKey}&language=en-US&page=${1}`);
      const data = await response.data.results;
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  }

  function onClickSwitch() {
    setIsToday(!isToday);
  }

  useEffect(() => {
    _getMovies()
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
      <div className='flex gap-5 px-10 py-10 overflow-x-scroll'>
        {isToday ?
          movies.map((movie: PopularMovieResultType) =>
            <div key={movie.id}>
              <div className='h-[230px] w-[150px]'>
                <Image src={`${imgUrl}${movie.poster_path}`}
                  alt={movie.title}
                  width="100" height="100" loading='lazy'
                  className='rounded-lg cursor-pointer'
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className='relative pt-4'>
                <div className='absolute z-1 top-[-20px] left-[10px] '>
                  <CircularPercentage value={movie.vote_average} />
                </div>
                <p className='font-semibold pt-3'>{movie.title}</p>
                <p className='text-gray-400'>{movie.release_date}</p>
              </div>
            </div>
          )

          :
          trendingThisWeek.map((movie, i: number) =>
            <div key={i}>
              <div className='h-[230px] w-[150px] border rounded-lg'>
                {movie.img}
              </div>
              <div className='relative pt-4'>
                <div className='absolute z-1 top-[-20px] left-[10px] '>
                  <CircularPercentage value={movie.rate} />
                </div>
                <p className='font-semibold pt-3'>{movie.title}</p>
                <p className='text-gray-400'>{movie.date}</p>
              </div>
            </div>
          )

        }
      </div >
    </section >
  )
}



function SearchBar() {
  return (
    <div className='flex relative'>
      <input type="text" placeholder='Search for a movie, tv shows, person.....' className='flex-1 rounded-full px-5 py-3 outline-none ' />
      <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-full absolute right-[-2px] z-1 text-white'>Search</button>
    </div>

  )
}