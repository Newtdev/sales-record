import React from "react";

const Loading = () => {
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity flex justify-center items-center'>
      <div className='flex items-center justify-center '>
        <div className='w-40 h-40 border-t-4 border-b-4 border-purple-700 rounded-full animate-spin'></div>
      </div>
    </div>
  );
};

export default Loading;
