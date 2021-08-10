import React from "react";
import { Link } from "react-router-dom";

const ResetPage = props => {
  return (
    <div>
      <div className='h-screen max-w-screen-2xl bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900'>
        <div className='h-4/5 w-screen mx-auto flex justify-center items-center px-2 shadow-xs'>
          <div className='h-96 w-72 mt-auto sm:w-96 px-6 sm:px-8 mx-auto rounded-sm bg-white'>
            <div className=' w-24 py-4 mx-auto flex items-center justify-center'>
              <h2 className='text-3xl font-extrabold text-indigo-700'>WDS</h2>
            </div>
            <div className=' text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <h3
                className='text-2xl text-center leading-6 font-medium text-gray-900'
                id='modal-title'>
                {props.heading}{" "}
              </h3>
              <div className='mt-4'>
                <p className='text-sm text-gray-500 text-left  '>
                  {props.description}
                </p>
                <div className='mt-6'>{props.input}</div>
              </div>
              <div className='py-4'>{props.button}</div>
            </div>
            <div className='sm:w-4/5 py-8  mx-auto flex justify-center items-center'></div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ResetPage;
