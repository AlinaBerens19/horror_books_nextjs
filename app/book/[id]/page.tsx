import React from 'react';
import Footer from '@/app/(site)/components/Footer';
import Header from '@/app/(site)/components/Header';
import DetailedBook from './components/DetailedBook';


interface BookPageProps {
  id: string;
}


const BookPage = ({ params }: { params: BookPageProps }) => {
  
  const {id} = params;

  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <div className="flex flex-col text-2xl text-white w-full h-screen sm:flex-row px-10 gap-10 items-center justify-center">
        <DetailedBook 
          id={id}
        />
      </div>
      <Footer />
    </div>
  );
};



export default BookPage;
