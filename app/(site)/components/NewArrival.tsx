'use client'

import { Book } from "@/app/models/Book";
import ListOfBooks from "./ListOfBooks";
import { useEffect, useState } from "react";


interface NewArrivalProps {
  book_images?: (string | undefined)[];
}


const NewArrival: React.FC<NewArrivalProps> = ({
  book_images
}) => {

  const imageDictionary = book_images?.map((image, index) => {
    return {
      id: index,
      image: image,
    }
  })

  // console.log('IMAGE DICTIONARY NEW ARRIVAL ==> ', imageDictionary)

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      
      <div className="text-top text-white text-3xl">
        New Arrival
      </div>

      <ListOfBooks book_images={imageDictionary}/>
    </div>
  )
}

export default NewArrival
