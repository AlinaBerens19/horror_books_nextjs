'use client'

import { useEffect, useState } from "react";
import ListOfBooks from "./ListOfBooks";
import { Book } from "@/app/models/Book";


interface MostTerrifyingProps {
    book_images?: (string | undefined)[];
}

const MostTerrifying: React.FC<MostTerrifyingProps> = ({
    book_images,
}) => {


  const imageDictionary = book_images?.map((image, index) => {
    return {
      id: index,
      image: image,
    }
  })

  // console.log('IMAGE DICTIONARY MOST TERRIFYING ==> ', imageDictionary)

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <div className="text-top text-white text-3xl">
        Most Terrifying
      </div>

      <ListOfBooks book_images={imageDictionary}/>
    </div>
  )
}

export default MostTerrifying
