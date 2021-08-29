import React from "react";

const SalesDetails = props => {
  const costCal = (sell, quantity) => {
    let number = quantity * sell;
    return new Intl.NumberFormat().format(number);
  };

  const dailyRes = () => {
    const dailyRecords = props.records.map(data => {
      return (
        <div className='h-20 my-1 px-10 bg-white'>
          <div className='w-full h-full flex items-center justify-around text-lg font-semibold heading rounded-md hover:shadow-lg transition-shadow'>
            <div className='w-14'>{data.date}</div>
            <div>{data.name}</div>
            <div>
              <small className='heading line-through text-lg font-bold mr-0.5'>
                N
              </small>
              {data.sell}
            </div>
            <div>{data.quantity} pcs</div>
            <div>
              <small className='heading line-through text-lg font-bold mr-0.5'>
                N
              </small>
              {costCal(data.sell, data.quantity)}
            </div>
            <div>
              <button className='bg-purple-700 px-6 rounded-sm shadow-sm py-2 ml-4 mr-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-5'
                  viewBox='0 0 20 20'
                  fill='white'>
                  <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                </svg>
              </button>
              <button className='bg-red-700 px-6 rounded-sm shadow-sm py-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='white'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    });
    return dailyRecords;
  };
  return (
    <div>
      <div className='w-screen min-h-full pb-10 '>
        <div className='w-full h-20 mx-auto heading-container px-10 bg-white'>
          <div className='w-full h-full flex items-center justify-evenly text-2xl heading font-bold'>
            <span>Date</span>
            <span> Name</span>
            <span>Price</span>
            <span> Quantity</span>
            <span>Total</span>
            <div className='w-44'></div>
          </div>
          <button></button>
          {/* <h4>Delete</h4> */}
        </div>
        {dailyRes()}
      </div>
    </div>
  );
};

export default SalesDetails;
