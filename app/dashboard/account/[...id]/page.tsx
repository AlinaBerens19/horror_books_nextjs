import React from 'react';
import Footer from '@/app/(site)/components/Footer';
import Header from '@/app/(site)/components/Header';
import DashboardItem from '../../components/DashboardItem';
import Account from '../../components/Account';
import { useSession } from 'next-auth/react';

interface AccountDashboardParams {
  profile_picture?: string;
  email?: string;
}

const AccountDashboardPage = ({ profile_picture, email }: AccountDashboardParams) => {

  
  return (
    <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
      <Header />
      <div className="flex flex-grow items-top pt-10 justify-center h-screen">
        <div className="w-2/3 h-3/4 border-red-500 border-[2px] rounded-lg">
          <div className='flex flex-row w-auto h-fit'>
            <DashboardItem data='Account' />
            <DashboardItem data='Wishlist' />
            <DashboardItem data='Uploaded' />
            <DashboardItem data='Change password' />
          </div>
          <div className='flex text-white justify-start items-center p-16 text-2xl'>
            <Account isActive={true} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AccountDashboardPage;
