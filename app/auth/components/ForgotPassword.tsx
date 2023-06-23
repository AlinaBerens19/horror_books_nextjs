'use client'

import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Login = () => {
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
      <h1 className="text-3xl">Restore Password</h1>
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

      <input
        type="password"
        className="text-2xl p-1 sm:w-[300px] text-white border-2 bg-neutral-800 border-white hover:border-red-600 rounded-md focus:border-red-600"
        placeholder="Confirm password"
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
    </div>
  );
};

export default Login;