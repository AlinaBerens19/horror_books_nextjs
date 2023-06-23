import React from 'react';
import Footer from '@/app/(site)/components/Footer';
import Header from '@/app/(site)/components/Header';
import Providers from '../Providers';

interface DashboardParams {
  data?: string;
}

const DashboardPage = async () => {
// { params }: { params: DashboardParams}
//   const { data } = params

  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
    <Header />
    <div className="flex flex-col text-2xl text-white w-full h-screen sm:flex-row p-40 gap-10 justify-center">
        Dashboard
    </div>
    <Footer />
    </div>
  );
};

export default DashboardPage

