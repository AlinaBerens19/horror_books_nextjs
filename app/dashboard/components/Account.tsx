'use client'

import { useSession } from "next-auth/react";
import { FieldValues, set, useForm } from "react-hook-form";
import axios from 'axios';
import { use, useEffect, useState } from "react";

interface Props {
  isActive: boolean,
  email?: string,
}

const Account: React.FC<Props> = ({
  isActive = true,
}) => {
   
  const { data: sessionData } = useSession();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState(null);

  const baseUrl = 'http://127.0.0.1:8000/auth/profile/';
  const [user_email, setEmail] = useState('0');
  

  const handleClick = async () => {

    if (user_email && user !== null) {
      const params = {
        email: user_email,
        user: user
      };

      console.log('PARAMS == >', params);
  
      const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
      console.log('URL == >', url);

      const formData = new FormData();
      formData.append('user', user);
      formData.append('surname', surname);
      formData.append('phone', phone);
      formData.append('address', address);
      
      try {
        const response = await axios.put(url, formData).then((res) => {
          alert('Profile updated successfully');
        });

        console.log('RESPONSE == >', response);
      } catch (error) {
        if(phone.length === 0){
          alert('Phone number is required');
        }
      }
    } else {
      // Handle the case when the email is undefined or null
      console.error('Email is missing');
    }
  };

  const getUser = async () => {

    const email = sessionData?.user?.email;
    
    if (email) {
      setEmail(email);
      const params = {
        email: email
      };
  
      const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
  
      try {
        const response = await axios.get(url);
        setUser(response.data.user);
        console.log('RESPONSE == >', response);
      } catch (error) {
        alert(error);
      }
    } else {
      // Handle the case when the email is undefined or null
      console.error('Email is missing');
    }
  };

  useEffect(() => {
    getUser();
  }, []);
   

  return (
    <div className="flex flex-col">
      <div className={`flex flex-row items-center justify-start gap-5 ${isActive ? "text-red-500" : "text-white"}`}>
        <img src={sessionData?.user?.image!} alt="" className="w-36 h-36 bg-cover rounded-full border-white border-[2px] object-fit cursor-pointer" />
        <div className="flex flex-col">
        <div className="text-white">{sessionData?.user?.name}</div>
          <div className="text-white">{sessionData?.user?.email}</div>
        </div>
      </div>

      <div className="flex flex-row pt-10 w-full gap-5">

          <input 
            type="text" 
            placeholder="First name"
            className="w-full h-10 px-3 text-white text-xl bg-transparent border border-white rounded-lg focus:outline-none focus:border-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Surname"
            className="w-full h-10 px-3 text-white text-xl bg-transparent border border-white rounded-lg focus:outline-none focus:border-red-500"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input 
            type="phone" 
            placeholder="Phone number"
            className="w-full h-10 px-3 text-white text-xl bg-transparent border border-white rounded-lg focus:outline-none focus:border-red-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Address"
            className="w-full h-10 px-3 text-white text-xl bg-transparent border border-white rounded-lg focus:outline-none focus:border-red-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}

          />
        </div>

        <div className="flex flex-row pt-10 w-full">
          <button 
            onClick={handleClick}
            className="w-fit px-10 py-1 rounded-lg cursor-pointer hover:bg-red-700 hover:text-3xl text-white bg-red-500 text-2xl">
            Save
          </button>
        </div>

    </div>
  )
}

export default Account