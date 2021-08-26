import React from "react";

const SalesDetails = props => {
  const records = [
    {
      id: 1,
      quantity: 2000,
      name: "Coke",
      cost: 3000,
      sell: 500,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      quantity: 1000,
      name: "Pepsi",
      cost: 2000,
      sell: 1100,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      quantity: 1000,
      name: "Soap",
      sell: 50,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    }
  ];
  const costCal = (sell, quantity) => {
    let number = quantity * sell;
    return new Intl.NumberFormat().format(number);
  };

  const addTotal = Total => {
    return { ...Total };
    // return (Total = Total + Total);
  };
  const dailyRes = () => {
    const sum = records.map(cur => {
      return cur.total();
    });
    console.log(sum.reduce((acc, cur) => acc + cur));
    const dailyRecords = records.map(data => {
      return (
        <div className='w-screen bg-red-900'>
          <div className='w-full h-16 mx-auto mb-2 px-4  shadow-lg'>
            <div className=' h-full flex justify-around bg-white items-center font-bold rounded-md'>
              <span>{data.date}</span>

              <span>{data.name}</span>
              <span>
                <small className='heading line-through text-lg font-bold mr-0.5'>
                  N
                </small>
                {data.sell}
              </span>
              <span>{data.quantity} pcs</span>
              <span>
                {" "}
                <small className='heading line-through text-lg font-bold mr-0.5'>
                  N
                </small>
                {costCal(data.sell, data.quantity)}
              </span>
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
        </div>
      );
    });
    return dailyRecords;
  };
  return (
    <div>
      <div className='w-screen h-10 '>
        <div className='w-full h-full flex items-center justify-around heading-container px-2'>
          <h4 className='mr-3'>Date</h4>
          <h4> Name</h4>
          <h4>Price</h4>
          <h4> Quantity</h4>
          <h4>Total</h4>
          <div className='w-36'></div>
          {/* <h4>Delete</h4> */}
        </div>
      </div>
      {dailyRes()}
    </div>
  );
};

export default SalesDetails;
