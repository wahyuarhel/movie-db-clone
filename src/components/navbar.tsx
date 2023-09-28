"use client"
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
function Navbar() {
  const [menuIndex, setMenuIndex] = useState<number>()

  const menuItems = [
    { title: 'Movie', subMenu: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'], path: '/' },
    { title: 'Tv Show', subMenu: ['Popular', 'Airing Today', 'On Tv', 'Top Rated'], path: '/' },
    { title: 'People More', subMenu: ['Popular People'], path: '/' },
    { title: 'Movie', subMenu: ['Discussion', 'Leaderboard', 'Support', 'Api'], path: '/' },
  ]

  console.log('menuIndex:', menuIndex)
  return (
    <div className='bg-[#032541] fixed top-0 w-[100%] h-[64px] flex z-[1000]'>
      <div className='container m-auto flex flex-row gap-5 justify-between items-center'>
        <div className='flex flex-row gap-5 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <p className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Movie-DB</p>
            <div className='w-[50px] h-[20px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'></div>
          </div>
          {menuItems.map((e, i) =>
            <div key={i}
              className='relative cursor-pointer py-3 px-2'
              onMouseEnter={() => onHoverAtMenu(i)}
              onMouseLeave={onMouseLeave}
            >
              <p className='text-white'>{e.title}</p>
              {menuIndex == i
                ?
                <Submenu key={i} label={e.subMenu} openDropdown={menuIndex == i} className='translate-y-[5px]' />
                : null
              }
            </div>
          )}
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

  function Submenu({ label, className, openDropdown = false, }: { label: string[], className?: string, openDropdown: boolean }) {
    return (
      <div className={`bg-white rounded-lg py-2 min-w-[200px] shadow-lg absolute ${className}`} onMouseEnter={() => openDropdown = true}>
        {label.map((e, i) =>
          <p key={i} className='px-5 py-1 hover:bg-blue-300 cursor-pointer '>{e}</p>
        )}
      </div>
    )
  }

}

export default Navbar