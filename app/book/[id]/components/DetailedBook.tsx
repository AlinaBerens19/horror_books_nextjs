'use client'

import { fetched_book, getBook } from "@/app/actions/getBook";
import DownloadBook from "@/app/components/DownloadBook";
import { Book } from "@/app/models/Book";
import { useEffect, useState } from "react";


interface Props {
  id?: string;
}

const DetailedBook:React.FC<Props> = ({
    id
}) => {

  console.log('DetailedBook: id =', id);

  const [isLoading, setIsLoading] = useState(true);
  const [fetchedBook, setFetchedBook] = useState<Book | null>(null);

  useEffect(() => {
    const getData = async () => {
      getBook(id!)
        .then(() => {
          setFetchedBook(fetched_book);
        }
        )
        .catch((error) => {
          console.log(error);
        }
        )
        .finally(() => {
          setIsLoading(false);
        })

      }
    
      getData();

      console.log('DetailedBook: fetchedBook =', fetchedBook);

  }, []);

  const onDownloadBook = async (format: string) => {

  }

  return (
    <div className="min-h-screen overflow-y-auto sm:h-screen w-full px-3 sm:px-16 py-5">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col sm:flex-row py-1 sm:py-5 items-top justify-start">
          <img src={fetchedBook?.image} alt="Book cover" className="w-full h-full sm:w-1/4 sm:h-7/8"/>

          <div className="flex flex-col sm:ps-20 justify-start items-top gap-4">

            <div className="flex flex-col gap-2">
              <div className="text-red-500 text-4xl text-bold">
                {fetchedBook?.title}
              </div>
              <div className="text-white text-2xl text-bold">
                {fetchedBook?.author}
              </div>
              <div className="text-white text-xl text-light">
                {fetchedBook?.ranking}
              </div>

              <DownloadBook onDownloadBook={onDownloadBook}/>

              <div>
                <div className="text-white text-xl text-bold cursor-pointer hover:text-red-500">
                  Read online
                </div>
              </div>

              <div className="text-white text-xl pt-10 pb-10">
                {fetchedBook?.description}
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedBook
