'use client'

import React, { use, useEffect, useState } from 'react';
import { signIn, useSession  } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: sessionData } = useSession();
  

  const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm<FieldValues>({
  defaultValues: {
    password: '',
    username: '',
  }
  });

  const signInWithGoogle = async () => {
    signIn('google', { callbackUrl: '/' })
      .then((result) => {
        if (result?.error) {
          alert(result.error);
          console.log('GOOGLE SESSION ==> ', result.error);
        } else {
          console.log('GOOGLE SESSION ==> ', result);
          alert(result?.status + ' logged in successfully');
          router.push('/');
        }
  
        console.log('RESPONSE FROM SERVER:', result);
      });
  };
  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((response) => {
        setIsLoading(false);
        if (response?.ok) {
          if (!sessionData) {
            return <div>Loading...</div>; // Render a loading state while fetching session data
          }
  
          const email = sessionData?.user?.email;
          alert(email + ' logged in successfully');
          
          const url = `/dashboard/account/${email}`;

          router.push(url);
        } else if (response?.error) {
          alert(response.error);
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };
  
  

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-neutral-800">
      <h1 className="text-3xl">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        {...register('username', { required: true })}
      />
      {errors.username && <span>This field is required</span>}

      <input
        type="password"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <button className="hover:text-red-600" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
      <button className="flex flex-row justify-evenly">
        <img 
          src="/images/google_03.png" 
          onClick={signInWithGoogle} 
          className="w-10 h-10"
          alt="" />
          
          
      </button>

      <div className='text-white text-lg hover:text-red-600 items-start justify-start'>
        <a href="/auth/forgot_password">Forgot your password? Click here</a>
      </div>
    </div>
  );
  };

  export default Login;

