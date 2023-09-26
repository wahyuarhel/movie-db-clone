import { imgUrl } from "@/redux/api/endpoint"


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
  return (
    <section>
      <div className={`${props.loading ? 'bg-gradient-to-r from-gray-500 to-gray-100' : props.backgroundImage != undefined ? 'bg-center bg-sky-950 bg-blend-luminosity' : ''} px-[40px] py-[120px]`}
        style={{ backgroundImage: props.backgroundImage != undefined ? `url(${imgUrl}${props.backgroundImage})` : undefined }}
      >
        <p className='text-5xl text-white font-semibold'>Welcome.</p>
        <p className='text-3xl text-white pb-10'>Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <p></p>
        <SearchBar />
      </div>
    </section>
  )
}

export function SearchBar() {
  return (
    <div className='flex relative'>
      <input type="text" placeholder='Search for a movie, tv shows, person.....' className='flex-1 rounded-full px-5 py-3 outline-none ' />
      <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-full absolute right-[-2px] z-1 text-white'>Search</button>
    </div>

  )
}
