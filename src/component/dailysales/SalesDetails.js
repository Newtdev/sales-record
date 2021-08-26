import React from "react";

const SalesDetails = props => {
  const records = [
    { id: 1, quantity: 2000, cost: 3000, sell: 3500, date: new Date().now() },
    { id: 2, quantity: 1000, cost: 2000, sell: 3500, date: new Date().now() },
    { id: 3, quantity: 4000, cost: 4500, sell: 5500, date: new Date().now() }
  ];

  const dailyRecords = records.map(data => {
    return <div></div>;
  });
  return <div></div>;
};

export default SalesDetails;
