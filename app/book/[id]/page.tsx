import React from 'react';
import Footer from '@/app/(site)/components/Footer';
import Header from '@/app/(site)/components/Header';

interface BookParams {
  id?: string;
}

const BookPage = async ({ params }: { params: BookParams}) => {

  const { id } = params

  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <div className="flex flex-col text-2xl text-white w-full h-screen sm:flex-row p-10 gap-10 items-center justify-center">
        Book {id}
      </div>
      <Footer />
    </div>
  );
};

export default BookPage

