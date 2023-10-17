"use client"
import LoginModal from '@/app/components/loginModal';
import { Accordion, AccordionItem, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/dist/client/link';
import { usePathname } from 'next/navigation';
import React, { Key, useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
function AppNavbar() {
  const currentPage = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedMenuKeys, setSelectedMenuKeys] = React.useState<Iterable<Key>>(new Set(['']));


  const menuItems = [
    {
      title: 'Movie',
      subMenu: [
        { label: 'Popular', path: '/movie' },
        { label: 'Now Playing', path: '/now-playing' },
        { label: 'Upcoming', path: '/upcoming' },
        { label: 'Top Rated', path: '/top-rated' }
      ]
    },
    {
      title: 'Tv Show',
      subMenu: [
        { label: 'Popular', path: '/tv' },
        { label: 'Airing Today', path: '/airing-today' },
        { label: 'On Tv', path: '/on-tv' },
        { label: 'Top Rated', path: '/top-rated' }
      ]
    },
    {
      title: 'People',
      subMenu: [
        { label: 'Popular People', path: '/people' }
      ]
    },
  ]

  function handleLoginModal() {
    setIsOpenModal((prev) => !prev)
    console.log('handleLoginModal triggered')
  }

  function handleMenuSelectedStyle(pathName: string) {
    if (pathName === currentPage) {
      return 'text-white/100 underline'
    }
    return ''
  }
  const handleOpenMenu = () => setIsMenuOpen(prev => !prev)
  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }


  return (
    <>
      <LoginModal
        isOpen={isOpenModal}
        onOpenChange={handleLoginModal}
      />
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          wrapper: 'max-w-[1536px]'
        }}
      >
        <NavbarMenu className='md:hidden'>
          <NavbarMenuItem className='text-white'>
            <Accordion
              isCompact
              selectedKeys={selectedMenuKeys}
              onSelectionChange={setSelectedMenuKeys}
              className='px-0 py-0'
              showDivider={false}
            >
              {menuItems.map((menu, i) =>
                <AccordionItem key={i}
                  aria-label={menu.title}
                  title={menu.title}
                  indicator={<p></p>}
                  classNames={{
                    title: 'text-white text-xl font-semibold',
                    trigger: 'py-0 pb-2',
                    content: 'pl-2 py-0 pb-2'
                  }}
                >
                  <ul>
                    {menu.subMenu.map((subMenu, i) =>
                      <li key={i}>
                        <Link href={subMenu.path}
                          className={`text-base text-white/70 ${handleMenuSelectedStyle(subMenu.path)}`}
                          onClick={handleCloseMenu}
                        >
                          {subMenu.label}
                        </Link>
                      </li>
                    )}
                  </ul>

                </AccordionItem>
              )}
            </Accordion>
            <div
              className='cursor-pointer '
              onClick={handleLoginModal}>
              Login
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
        <NavbarContent >
          <NavbarMenuToggle
            onClick={handleOpenMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className='md:hidden text-white'
          />
          <NavbarBrand className='hidden md:block'>
            <Link href={'/'} >
              <div className='flex flex-row items-center gap-3 ' >
                <p className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lightGreen to-lightBlue'>MovieDB</p>
                <div className='w-[50px] h-[20px] rounded-full bg-lightBlue'></div>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <NavbarBrand className='md:hidden'>
            <Link href={'/'} onClick={handleCloseMenu}>
              <div className='flex flex-row items-center gap-3 '>
                <p className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lightGreen to-lightBlue'>MovieDB</p>
                <div className='w-[50px] h-[20px] rounded-full bg-lightBlue'></div>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='end'>
          <BiSearch className='text-white mx-3' />
        </NavbarContent>
      </Navbar>
    </>
  );

}

export default AppNavbar