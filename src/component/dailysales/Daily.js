import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductTotals from "./ProductTotals";
import SalesForm from "./SalesForm";
import Header from "../Header";
import { fetchProduct } from "../../action";
import SalesDetails from "./SalesDetails";

const Daily = ({ state, fetchProduct, match, productDetails }) => {
  const records = [
    {
      id: 1,
      quantity: 5,
      name: "Coke",
      sell: 1100,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      quantity: 5,
      name: "Pepsi",
      sell: 1100,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      quantity: 2,
      name: "Soap",
      sell: 1100,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 4,
      quantity: 5,
      name: "wine",
      sell: 1100,
      total: function sumTotal() {
        return this.quantity * this.sell;
      },
      date: new Date().toLocaleDateString()
    }
  ];
  const numb = Math.floor(match.params.id);
  const { cost, sell, quantity } = productDetails;
  useEffect(() => {
    fetchProduct(numb);
  }, []);

  const costCal = () => {
    const number = quantity * cost;
    return new Intl.NumberFormat().format(number);
  };

  const calcSales = () => {
    const number = quantity * sell;
    return new Intl.NumberFormat().format(number);
  };

  const currencySymbol = (
    <small className='heading line-through text-2xl sm:text-4xl font-bold'>
      N
    </small>
  );

  const sum = records.map(cur => {
    return cur.total();
  });

  const adding = sum.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const currencyFormat = total => {
    return new Intl.NumberFormat().format(total);
  };

  return (
    <div className='min-h-full w-screen bg-red-800'>
      <Header />
      <div className='h-60 w-screen py-4 flex items-center justify-start overflow-x-auto '>
        <ProductTotals>
          {"Supplied Quantity"}
          {quantity}
          {"pcs"}
        </ProductTotals>
        <ProductTotals>
          {"Total Cost Price"}
          {currencySymbol}
          {costCal()}
        </ProductTotals>
        <ProductTotals>
          {"Total selling Price"}
          {currencySymbol}
          {calcSales()}
        </ProductTotals>
        <ProductTotals>
          {"Total Sales"}
          {currencySymbol}
          {currencyFormat(adding)}
        </ProductTotals>
      </div>
      <div>
        <SalesForm />
        <SalesDetails records={records} />
      </div>
    </div>
    // </div>
  );
};
//Math.floor(ownprops.match.params.id)
const mapStateToProps = state => {
  const [product] = state.ProductReducer.product;
  return { productDetails: product };
};

export default connect(mapStateToProps, { fetchProduct })(Daily);

// sk on https://github.com/supabase/supabase/discussions or support@supabase.com
