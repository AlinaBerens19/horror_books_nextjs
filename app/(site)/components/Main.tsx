'use client'

import { books, getData } from "@/app/actions/getData";
import { useEffect, useState } from "react";
import TopTenBooks from "./TopTenBooks";
import TrendingNow from "./TrendingNow";
import MostTerrifying from "./MostTerrifying";
import NewArrival from "./NewArrival";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedBooks, setFetchedBooks] = useState(books);

  let i = -1;
  let j = -1;

  const sortedBooks = fetchedBooks?.sort((a, b) => {
    if (a !== null && b !== null) {
      return b.ranking! - a.ranking!;
    }
    return 0;
  });
  
  // Filter first ten books by category 'Terrifying'
  const filteredBooksTerrifying = fetchedBooks?.filter((book) => book.category === 'Terrifying').slice(0, 5);

  // Filter first ten books by category 'New'
  const filteredBooksNewArrival = fetchedBooks.filter((book) => book.category === 'New').slice(0, 5);

  // Create array of 'Terrifying' book images
  const bookImagesTerrifying = filteredBooksTerrifying?.map((book) => book.image);

  // Create array of 'New' book images
  const bookImagesNewArrival = filteredBooksNewArrival?.map((book) => book.image);

  // Create array of first top ten books
  const topTenBooks = sortedBooks?.slice(0, 9)

  let trending_now = books?.filter((book) => book.trending === true)
  trending_now.sort((a, b) => {
    if (a !== null && b !== null) {
      return b.ranking! - a.ranking!;
    }
    return 0; // Return 0 for null or undefined values
  });

  useEffect(() => {
    const getBooks = async () => {
        getData('http://127.0.0.1:8000/library/books/')
        .then(() => {
            console.log('fetched_books ==> ', books);
            setFetchedBooks(books);
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
    
      getBooks();
    
  }, []);
    
  return (
    <div className="flex flex-col w-full items-center justify-center bg-neutral-800">
      <div className="flex flex-col lg:flex-row p-5 lg:gap-5 gap-10">
          <TopTenBooks
            title={topTenBooks?.map((book) => book.title)}
            ranking={topTenBooks?.map((book) => book.ranking)}
          />
          <TrendingNow
            title={trending_now[0]?.title}
            description={trending_now[0]?.description}
            image={trending_now[0]?.image}
            ranking={trending_now[0]?.ranking}
          />
      </div>
      <MostTerrifying book_images={bookImagesTerrifying} />
      <NewArrival book_images={bookImagesNewArrival} />
    </div>
  );
};

export default Main;

