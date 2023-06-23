'use client'

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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

