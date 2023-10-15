import { backdropUrlSizeW1280, backdropUrlSizeW780 } from "@/redux/api/endpoint"
import { useEffect, useState } from "react"


interface HeaderHomeProps {
  backgroundImage?: string,
  loading?: boolean
}

/**
```
interface HeaderHomeProps {
  backgroundImage?: string,
  loading?: boolean
}
```
 */
export function HeaderHome(props: HeaderHomeProps) {
  const backdropSize = backdropUrlSizeW1280 + props.backgroundImage
  return (
    <section id="headerHome">
      <div
        className={`${props.loading ? 'bg-gradient-to-r from-gray-500 to-gray-100'
          : props.backgroundImage !== undefined ? `bg-[length:500px_300px] bg-lightBlue bg-no-repeat md:bg-cover bg-center md:bg-no-repeat md:bg-[top]`
            : ''} `}
        style={{ backgroundImage: props.backgroundImage !== undefined ? `url('${backdropSize}')` : undefined }}
      >
        <div className='bg-darkBlue/80 bg-blend-screen px-5 py-8 md:px-[40px] md:py-[120px]'>
          <p className='text-5xl text-white font-semibold'>Welcome.</p>
          <p className='text-3xl text-white pb-7 md:pb-10'>Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <p></p>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}

export function SearchBar() {
  return (
    <div className='flex relative'>
      <input type="text" placeholder='Search for a movie, tv shows, person.....' className='flex-1 rounded-full px-5 py-3 outline-none hidden md:block' />
      <input type="text" placeholder='Search.....' className='flex-1 rounded-full px-5 py-3 outline-none md:hidden' />
      <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-full absolute right-[-2px] z-1 text-white'>Search</button>
    </div>

  )
}
