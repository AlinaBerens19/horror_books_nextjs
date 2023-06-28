'use client'


interface DownloadBookProps {
    onDownloadBook: (format: string) => void;
}

const DownloadBook:React.FC<DownloadBookProps> = ({
    onDownloadBook
}) => {
  return (
    <div className="flex flex-row gap-1 text-white text-base md:text-xl mt-4 md:mt-0">
        <div className="text-red-500">
        {'Download'}
        </div>
        <div 
        onClick={() => {
            onDownloadBook('pdf');
        }}
        className="cursor-pointer hover:text-red-500">
        {'PDF'}
        </div>
        |
        <div 
        onClick={() => {
            onDownloadBook('epub');
        }}
        className="cursor-pointer hover:text-red-500">
        {'EPUB'}
        </div>
        |
        <div 
        onClick={() => {
            onDownloadBook('mobi');
        }}
        className="cursor-pointer hover:text-red-500">
        {'MOBI'}
        </div>
  </div>
  )
}

export default DownloadBook
