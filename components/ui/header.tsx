"use client"

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  console.log(pathname,"hffgfgfggfgf")
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact" },
    { title: "Career", link: "/career" },

  ];


  return (
    <header className=" fixed top-0 bg-[#1C1B27] w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image  src={logo} width={150} height={150} alt="logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link
              href={menuItem.link}
              className={`font-medium ${pathname === menuItem.link ? 'text-[#FF9D01]' : ''}  px-4 py-3 flex items-center transition duration-150 ease-in-out`}            >
              {menuItem.title}
            </Link>
          </li>
        ))}
              <li>
                <Link href="/" className="btn-sm text-white  bg-[#252262] hover:bg-purple-700 ml-3  rounded-full">
                  GET STARTED
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
