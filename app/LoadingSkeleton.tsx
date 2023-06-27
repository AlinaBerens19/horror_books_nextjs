'use client'


import { PuffLoader } from 'react-spinners'
import Header from './(site)/components/Header';

const LoadingSkeleton = () => {
    return (
        <div className="min-h-screen w-auto flex flex-col items-top justify-top bg-neutral-800">
            <Header />
            <div className='h-screen flex flex-col bg-neutral-800 justify-center items-center'>
                <PuffLoader 
                    color="red" 
                    size={100}
                />
            </div>
        </div>
    )

}

export default LoadingSkeleton;