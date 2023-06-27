'use client'

import React from 'react';
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Register = () => {

  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      image: '',
  }}
  );

  const onSubmit = (data: FieldValues) => {
    if(data.confirmPassword !== data.password){
      alert('Passwords do not match')
    }
    try {
      const response = axios.post("http://127.0.0.1:8000/auth/register/", data)
      .then(response => {
        alert("Account created successfully")
        router.push('/auth/login')
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
      .finally(() => {
        console.log('finally')
      });
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-neutral-800">
      <h1 className="text-3xl">Register</h1>
      <input
        type="text"
        placeholder="Username"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        {...register('username', { required: true })}
      />
      {errors.username && <span>This field is required</span>}

      <input
        type="email"
        placeholder="Email"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        {...register('email', { required: true })}
      />
      {errors.username && <span>This field is required</span>}

      <input
        type="phone"
        placeholder="Phone"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        {...register('phone', { required: true })}
      />
      {errors.username && <span>This field is required</span>}

      <input
        type="password"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        placeholder="Password"
        {...register('password', { required: true })}
      />

      <input
        type="password"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        placeholder="Password"
        {...register('confirmPassword', { required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="hover:text-red-600"
      >
        Submit
      </button>

      <div className='text-white text-lg hover:text-red-600 items-start justify-start'>
        <a href="/auth/login">Already registered? Click here</a>
      </div>
    </div>
  );
};

export default Register;

