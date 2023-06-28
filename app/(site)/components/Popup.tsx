import React from 'react';

interface PopupProps {
  onClose: () => void;
  link?: string;
  format?: string;
}

const Popup: React.FC<PopupProps> = ({ onClose, link, format }) => {

  const handleButtonClick = () => {
    const anchor = document.createElement('a');
    console.log('link ==> ', link);
    if (link === undefined) return;
    anchor.href = link!;
    anchor.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-600 bg-opacity-50">
      <div className="bg-black text-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Download book</h2>
        <div className='flex flex-row gap-5'>
          <button
            className="w-[110px] px-8 py-2 bg-red-500 text-white rounded hover:bg-red-800"
            onClick={onClose}
          >
            Close
          </button>

          <button
            className="w-[110px] px-8 py-2 bg-red-500 text-white rounded hover:bg-red-800"
            onClick={() => {
              handleButtonClick();
              onClose();
            }}
          >
            {format}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
