'use client'

import { Book } from "@/app/models/Book";
import TrendingItem from "./TrendingItem";


interface TrendingNowProps {
    id?: string;
    children?: React.ReactNode;
    title: string | null;
    ranking: number | null;
    image: string | undefined;
    description: string | null;
}

const TrendingNow: React.FC<TrendingNowProps> = ({
    id,
    children,
    title,
    ranking,
    image,
    description

}) => {
  return (
    <div className="h-[400] w-[400px] sm:w-full bg-neutral-950 border-red-800 border-2 rounded-xl border-rounded-xl">
      <div className="flex flex-col pt-4 items-top ">
        <div className="text-3xl text-white text-center">
            Trending Now
        </div>  
        <TrendingItem id={id} title={title} description={description} ranking={ranking} image={image}/>
      </div>
    </div>
  )
}

export default TrendingNow
