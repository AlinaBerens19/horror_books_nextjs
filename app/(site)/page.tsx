
import { get } from "http";
import { books, getData } from "../actions/getData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MostTerrifying from "./components/MostTerrifying";
import NewArrival from "./components/NewArrival";
import TopTenBooks from "./components/TopTenBooks";
import TrendingNow from "./components/TrendingNow";
import { DefaultSession } from "next-auth";


export default function Home({ user }: { user: DefaultSession }) {

  let i = -1;
  let j = -1;

  const sortedBooks = books?.sort((a, b) => {
    if (a !== null && b !== null) {
      return b.ranking! - a.ranking!;
    }
    return 0;
  });

  // Filter first ten books by category 'Terrifying'
  const filteredBooksTerrifying = books?.filter((book) => book.category === 'Terrifying').slice(0, 5);

  // Filter first ten books by category 'New'
  const filteredBooksNewArrival = books.filter((book) => book.category === 'New').slice(0, 5);

  // Create array of 'Terrifying' book images
  const bookImagesTerrifying = filteredBooksTerrifying?.map((book) => book.image);

  // Create array of 'New' book images
  const bookImagesNewArrival = filteredBooksNewArrival?.map((book) => book.image);
  
  // Create array of first top ten books
  const topTenBooks = sortedBooks?.slice(0, 9)

  const getBooks = async () => {
    getData('http://127.0.0.1:8000/library/books/')
    .then(() => {
      // console.log('fetched_books ==> ', books);
    }
    )
    .catch((error) => {
      console.log(error);
    }
    )
  }

  getBooks();

  let trending_now = books?.filter((book) => book.trending === true)
  trending_now.sort((a, b) => {
    if (a !== null && b !== null) {
      return b.ranking! - a.ranking!;
    }
    return 0; // Return 0 for null or undefined values
  });

  

  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <div className="flex flex-col sm:flex-row p-10 gap-10 ">
        <TopTenBooks title={topTenBooks.map(() => {
          i += 1
          return books[i].title
        })} ranking={topTenBooks.map(() => {
          j += 1
          return books[j].ranking
        })}/>
        <TrendingNow title={trending_now[0]?.title} description={trending_now[0]?.description} image={trending_now[0]?.image} ranking={trending_now[0]?.ranking}/>
      </div>
      <MostTerrifying book_images={bookImagesTerrifying}/>
      <NewArrival book_images={bookImagesNewArrival}/>
      <Footer />
    </div>
  )
}
