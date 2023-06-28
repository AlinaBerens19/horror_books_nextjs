'use client'

import { Book } from "@/app/models/Book";
import ListOfBooks from "./ListOfBooks";
import { useEffect, useState } from "react";


interface NewArrivalProps {
  books?: (Book | undefined)[];
}


const NewArrival: React.FC<NewArrivalProps> = ({
  books
}) => {

  const imageDictionary = books?.map((book, index) => {
    return {
      id: book?.id,
      image: book?.image,
      title: book?.title,
      description: book?.description,
      author: book?.author
    }
  })

  // console.log('IMAGE DICTIONARY NEW ARRIVAL ==> ', imageDictionary)

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      
      <div className="text-top text-white text-3xl">
        New Arrival
      </div>

      <ListOfBooks books={imageDictionary}/>
    </div>
  )
}

export default NewArrival
