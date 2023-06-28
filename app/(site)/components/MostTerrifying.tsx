'use client'

import { Book } from "@/app/models/Book";
import ListOfBooks from "./ListOfBooks";


interface MostTerrifyingProps {
    books?: (Book | undefined)[];
}

const MostTerrifying: React.FC<MostTerrifyingProps> = ({
  books,
}) => {


  const imageDictionary = books?.map((book) => {
    return {
      id: book?.id,
      image: book?.image,
      title: book?.title,
      description: book?.description,
      author: book?.author
    }
  })

  // console.log('IMAGE DICTIONARY MOST TERRIFYING ==> ', imageDictionary)

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <div className="text-top text-white text-3xl">
        Most Terrifying
      </div>

      <ListOfBooks books={imageDictionary}/>
    </div>
  )
}

export default MostTerrifying
