import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductTotals from "./ProductTotals";
import SalesForm from "./SalesForm";
import Header from "../Header";
import { fetchProduct } from "../../action";
import SalesDetails from "./SalesDetails";

const Daily = ({ state, fetchProduct, match, productDetails }) => {
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

  return (
    <div className='h-screen w-screen bg-red-800'>
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
          {0}
        </ProductTotals>
      </div>
      <div>
        <SalesForm />
        <SalesDetails />
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
