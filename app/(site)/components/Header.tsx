'use client'

import { twMerge } from "tailwind-merge";
import { IoMdSearch } from 'react-icons/io';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";


interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps>= ({
    className
}) => {

  const [searchVisible, setSearchVisible] = useState(false);
  const { data: session } = useSession();

  const router = useRouter()
  const {data: dataSession} = useSession();

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };


  return (
    <div className={twMerge(`
        w-full h-fit bg-gradient-to-b from-red-900 to-red-600 py-1 px-10
    `, className)}>
      
      <div className="flex flex-row px-16 items-center justify-evenly sm:justify-between">

        <div className="flex flex-row gap-5 items-center justify-center">
          <div>
              <img src="/images/spider.webp" className="w-25 h-20 bg-transparent" />
          </div>

          <div
            onClick={() => router.push(`/`)} 
            className="text-white text-4xl cursor-pointer">
              Horror Library
          </div>
        </div>
        

        <div className="flex flex-row items-center justify-center gap-5">

          {/* Slide-in search field */}
          <div
            className={`transition-all duration-300 slide-in-out ${
              searchVisible ? '-translate-x-1/2 opacity-0' : 'translate-x-0 opacity-100'
              
            }`}
          >
            <input
              type="text"
              placeholder="Search"
              className=" bg-transparent border border-white rounded p-1 text-white hover:border-[3px]"
            />
          </div>
          <button className="hidden md:block hover:text-black cursor-pointer text-white text-2xl"
              onClick={handleSearchClick}
          >
            <IoMdSearch />
          </button> 

          <div className="flex flex-row gap-3 pe-5">
            
              {session ? (
                  <button 
                    onClick={() => {
                      signOut()
                      router.push(`/`)}
                    }
                    className="hover:text-black text-white text-xl cursor-pointer"
                  >
                    Logout
                  </button>  ) : 
                (
                  <button 
                    onClick={() => router.push(`/auth/login/`)}
                    className="hover:text-black text-white text-xl cursor-pointer"
                  >
                    Login
                  </button>
                )} 
            <div className="text-white text-xl">
              {session ? '|' : '|'}
            </div> 
            <button 
                onClick={() => {
                  session ? router.push(`/dashboard/account/${dataSession?.user?.email}`) :
                  router.push(`/auth/register/`)}
                }
                className="hover:text-black text-white text-xl cursor-pointer"
            >
              {session ? 'Dashboard' : 'Register'}
            </button> 
          </div> 
          
        </div> 
      </div>

      

    </div>
  )
}

export default Header
