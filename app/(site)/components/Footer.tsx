'use client'

import { twMerge } from "tailwind-merge";

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({
    className
}) => {
  return (
    <div className={twMerge(`
        w-full h-[200px] pt-20 bg-gradient-to-t from-red-900 to-red-600 py-1 px-10
    `, className)}>
        <div className="text-white text-2xl">
            <div className="flex flex-col items-start justify-start px-10 pt-4">
                <div>
                    Contact us
                </div>
                <div>
                    About us
                </div>
                
            </div>    
        </div>
      
    </div>
  )
}

export default Footer
