"use client"
import Link from 'next/dist/client/link';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
function Navbar() {
  const [menuIndex, setMenuIndex] = useState<number>()
  const menuItems = [
    {
      title: 'Movie',
      subMenu: [
        { label: 'Popular', path: '/movie' },
        { label: 'Now Playing', path: 'now-playing' },
        { label: 'Upcoming', path: 'upcoming' },
        { label: 'Top Rated', path: '/top-rated' }
      ]
    },
    {
      title: 'Tv Show',
      subMenu: [
        { label: 'Popular', path: '/tv' },
        { label: 'Airing Today', path: '/' },
        { label: 'On Tv', path: '/' },
        { label: 'Top Rated', path: '/' }
      ]
    },
    {
      title: 'People',
      subMenu: [

        { label: 'Popular People', path: '/people' }

      ]
    },
  ]

  function MenuItems() {
    return menuItems.map((e, i) =>
      <div key={i}
        className='relative cursor-pointer py-3 px-2'
        onMouseEnter={() => onHoverAtMenu(i)}
        onMouseLeave={onMouseLeave}
      >
        <p className='text-white cursor-pointer'>{e.title}</p>
        {menuIndex == i
          ?
          <Submenu key={i} menu={e.subMenu.map((e) => e)} openDropdown={menuIndex == i} className='translate-y-[5px]' />
          : null
        }
      </div>
    )
  }

  return (
    <div className='bg-[#032541] fixed top-0 w-[100%] h-[64px] flex z-[1000]'>
      <div className='container m-auto flex flex-row gap-5 justify-between items-center'>
        <div className='flex flex-row gap-3 items-center'>
          <Link href={'/'}>
            <div className='flex flex-row items-center gap-3 '>
              <p className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lightGreen to-lightBlue'>MovieDB</p>
              <div className='w-[50px] h-[20px] rounded-full bg-lightBlue'></div>
            </div>
          </Link>
          <MenuItems />
        </div>
        <div><FaPlus className='text-white' /></div>
      </div>
    </div>
  );

  function onHoverAtMenu(index: number) {
    setMenuIndex(index)

  }

  function onMouseLeave() {
    setMenuIndex(undefined)
  }

  interface SubmenuPropTypes<T> {
    label: T[]

  }

  function Submenu({ menu, className, openDropdown = false, }: { menu: { label: string, path: string }[], className?: string, openDropdown: boolean, }) {
    return (
      <div className={`bg-white rounded-lg py-2 min-w-[200px] shadow-lg absolute ${className}`} onMouseEnter={() => openDropdown = true}>
        {menu.map((e, i) =>
          <Link href={e.path} key={i}>
            <p key={i} className='px-5 py-1 hover:bg-blue-300 cursor-pointer '>{e.label}</p>
          </Link>
        )}
      </div>
    )
  }

}

export default Navbar