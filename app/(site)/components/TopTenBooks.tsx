'use client'


interface TopTenBooksProps {
    children?: React.ReactNode;
    title?: (string | null)[];
    ranking?: (number | null)[];
}


const TopTenBooks: React.FC<TopTenBooksProps> = ({
    children,
    title,
    ranking,
}) => {

  const book_arr = title?.map((title, index) => {
    return {
      ranking: ranking![index],
      title: title,
    }
  })


  return (
    <div className="h-[500px] w-[400px] bg-neutral-950 rounded-xl border-2 border-red-800 border-rounded-xl">
      <div className="pt-4 flex flex-col">

      <div className="pt-3 flex flex-row items-top justify-center">
        <div className="text-2xl text-white">
            Top 10
        </div>
      </div>

      <div className="flex flex-col p-4 items-start text-xl gap-3 justify-start">
          {book_arr?.map((book, index) => (
            <div key={index} className="flex flex-row items-center gap-3 justify-center">
              <div className="text-white">
                {book.ranking}
              </div>
              <div className="text-white">
                {book.title}
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopTenBooks
