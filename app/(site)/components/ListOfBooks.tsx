'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

interface ListOfBooksProps {
  books?: {
    id: string | undefined ;
    image: string | null | undefined;
    title: string | null | undefined;
    description: string | null | undefined;
    author: string | null | undefined;
  }[];
}

const ListOfBooks: React.FC<ListOfBooksProps> = ({ books }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(4);

  const goToPreviousBook = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextBook = () => {
    if (books && currentIndex < books.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!books) {
    return null; // or render a placeholder/loading state
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <IoMdArrowBack
          size={40}
          className="text-bold bg-neutral-800 rounded-full text-red-800 hover:bg-red-400 cursor-pointer"
          onClick={goToPreviousBook}
        />
      </div>

      <div className="overflow-x-auto w-full">
        <div className="flex flex-nowrap space-x-6 px-10 mt-6 sm:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className={`sm:flex ${
                index === currentIndex ? 'flex' : 'hidden'
              } flex-shrink-0`}
            >
              <img
                src={book.image && book.image !== 'N/A' ? book.image : '/book-cover-placeholder.png'}
                className="w-[200px] h-[300px] cursor-pointer"
                onClick={() => {
                  console.log('BOOK ID ==> ', book.id);
                  const url = `/book/${book?.id}`;
                  router.push(url);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <IoMdArrowForward
          size={40}
          className="text-bold bg-neutral-800 rounded-full text-red-800 hover:bg-red-400 cursor-pointer"
          onClick={goToNextBook}
        />
      </div>
    </div>
  );
};

export default ListOfBooks;

