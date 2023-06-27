'use client'

import { useRouter } from "next/navigation";
import Account from "./Account";
import { Session } from "inspector";
import { useSession } from "next-auth/react";


interface DashboardItemProps {
    data?: string;
}

const DashboardItem: React.FC<DashboardItemProps> = ({
    data,
}) => {

  const router = useRouter()
  const { data: sessionData } = useSession();

  const handleClick = () => {
    console.log("Clicked");
    if(data === 'Account') {
      router.push("/dashboard/account/" + sessionData?.user?.email);
    } else if(data === 'Wishlist') {
      router.push("/dashboard/wishlist");
    } else if(data === 'Uploaded') {
      router.push("/dashboard/uploaded");
    } else if(data === 'Change password') {
      router.push("/dashboard/change_password");
    }
    else {
      console.log("Error");
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col items-center py-2 w-1/4 cursor-pointer border-red-500 border-[2px] justify-center">
      <div className="text-white text-2xl hover:text-red-500">
        {data}
      </div>
    </div>
  )
}

export default DashboardItem

