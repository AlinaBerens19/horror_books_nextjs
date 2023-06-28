'use client'

import { FaStar } from 'react-icons/fa';
import axios from "axios";
import { useEffect, useState } from 'react';
import Popup from './Popup';
import DownloadBook from '@/app/components/DownloadBook';

interface TrendingItemProps {
  id?: string,
  title?: string | null,
  description?: string | null,
  image?: string | undefined,
  ranking?: number | null
}

const TrendingItem: React.FC<TrendingItemProps> = ({
  id,
  title,
  description,
  image,
  ranking
}) => {

  const shortenedDescription = description?.slice(0, 400);
  const [link, setLink] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const onDownloadBook = async (format: string) => {

    await axios.get(`http://127.0.0.1:8000/library/files/?book=${id}`)
      .then((response) => {
        console.log(response.data);
        setLink(response.data.link);
        console.log('response data ==> ', response.data[0].link);
        setLink(response.data[0].link);
        openPopup();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('finally');
      });
  };
  
  useEffect(() => {
    // onDownloadBook('pdf');
  }, [])

  return (
    <div className="flex flex-col py-4 px-4 md:px-10 items-center md:flex-row justify-between">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:gap-3">
        { showPopup && <Popup onClose={closePopup} format='PDF' link={link}/>}
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

      <DownloadBook onDownloadBook={onDownloadBook}/>

      <div className="w-auto mt-4 md:mt-0">
        <img src={image} className="w-full md:w-120 h-80 bg-transparent" />
      </div>
    </div>
  )
}

export default TrendingItem;
