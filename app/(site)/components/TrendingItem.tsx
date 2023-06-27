'use client'

import { FaStar } from 'react-icons/fa';

interface TrendingItemProps {
  title?: string | null,
  description?: string | null,
  image?: string | undefined,
  ranking?: number | null
}

const TrendingItem: React.FC<TrendingItemProps> = ({
  title,
  description,
  image,
  ranking
}) => {

  const shortenedDescription = description?.slice(0, 400);

  return (
    <div className="flex flex-col py-4 px-4 md:px-10 items-center md:flex-row justify-between">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:gap-3">
        <div className="text-red-600 text-2xl">
          {title}
        </div>
        <div className='flex flex-row gap-1'>
            <FaStar size={20} className="text-red-600" />
            <FaStar size={20} className="text-red-600" />
            <FaStar size={20} className="text-red-600" />
            <FaStar size={20} className="text-red-600" />
            <FaStar size={20} className="text-red-600" />
        </div>
        
      </div>

      <div className="w-full md:w-[400px] text-white px-10 text-xl mt-4 md:mt-0">
        {shortenedDescription} ...
      </div>

      <div className="flex flex-row gap-3 text-white text-base md:text-xl mt-4 md:mt-0">
        <div className="text-red-600">
          {'Download'}
        </div>
        <div className="cursor-pointer hover:text-red-800">
          {'PDF'}
        </div>
        |
        <div className="cursor-pointer hover:text-red-800">
          {'EPUB'}
        </div>
        |
        <div className="cursor-pointer hover:text-red-800">
          {'MOBI'}
        </div>
      </div>

      <div className="w-auto mt-4 md:mt-0">
        <img src={image} className="w-full md:w-120 h-80 bg-transparent" />
      </div>
    </div>
  )
}

export default TrendingItem;
