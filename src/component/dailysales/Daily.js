import React from "react";
import { connect } from "react-redux";
import ProductTotals from "./ProductTotals";
import SalesForm from "./SalesForm";
import Header from "../Header";

const Daily = ({ state }) => {
  const costCal = () => {
    const number = state.quantity * state.cost;
    return new Intl.NumberFormat().format(number);
  };

  const currencySymbol = (
    <small className='heading line-through text-2xl sm:text-4xl font-bold'>
      N
    </small>
  );

  return (
    <div className='h-screen w-screen bg-red-800'>
      <Header />
      <div className='h-60 w-screen py-4 flex items-center justify-start md:justify-center  overflow-x-auto '>
        <ProductTotals>
          {"Supplied Quantity"}
          {state.quantity}
          {"pcs"}
        </ProductTotals>
        <ProductTotals>
          {"Total Cost Price"}
          {currencySymbol}
          {costCal()}
        </ProductTotals>
        <ProductTotals>
          {"Total Sales"}

          {currencySymbol}
          {0}
        </ProductTotals>
        {/* <ProductTotals supplied={state.quantity} ></ProductTotals> */}
        {/* <ProductTotals supplied={state.quantity}></ProductTotals> */}
        {/* <ProductTotals /> */}
        {/* <ProductTotals /> */}
      </div>
      <div>
        <SalesForm />
      </div>
    </div>
    // </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  const product = state.ProductReducer.product;
  const [productData] = product.filter(
    cur => cur.id == ownprops.match.params.id
  );
  return { state: productData };
};

export default connect(mapStateToProps)(Daily);
