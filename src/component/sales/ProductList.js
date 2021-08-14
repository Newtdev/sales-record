import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { connect } from "react-redux";
import { fetchProducts } from "../../action";

const ProductList = ({ fetchProducts, signIn, Product }) => {
  // console.log(props);
  useEffect(() => {
    fetchProducts(signIn.user.id);
  }, []);

  const displaybutton = () => {
    return (
      <React.Fragment>
        <div className='' id='button-container'>
          <Link
            to='/'
            className='inline-block w-full py-3 sm:py-2.5 rounded px-4 align-baseline font-bold text-sm text-center text-white bg-blue-600 hover:bg-blue-700 mt-4 shadow-lg'
            type='submit'>
            Edit Product
          </Link>
        </div>

        <div>
          <button className='block w-full py-3 rounded px-4 align-baseline font-bold text-sm text-white bg-red-600 hover:bg-red-600 mt-4 shadow-lg'>
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  };
  // sm:max-w-6xl sm:w-

  const RenderProduct = () => {
    const productCard = Product.map(product => {
      return (
        <div
          key={product.id}
          className='product-card w-60 h-73 pb-6 mx-auto sm:mx-0 rounded-md shadow-lg bg-gray-50 border border-blue-400'>
          <div className='h-full w-full px-4 py-2'>
            <div
              id='product-name'
              className=' w-full flex justify-between items-center'>
              <h2 className='text-2xl text-gray-700 font-bold pt-2'>
                {product.name}
              </h2>
              <div>
                <Link
                  to='/'
                  className='inline-block py-1 sm:py-2 rounded px-4 font-bold text-sm text-center text-white bg-blue-600 hover:bg-blue-700 shadow-lg'
                  type='submit'>
                  Open Sales
                </Link>
              </div>
            </div>
            <div
              className='w-full py-2 flex flex-col justify-around'
              id='container'>
              <span
                className='flex justify-between max-w-full py-1 px-2 font-bold text-md sm:text-lg text-gray-700'
                id='quantity'>
                <p>Quantity:</p>
                <p>{product.quantity}</p>
              </span>
              <span
                className='flex justify-between max-w-full py-1 px-2 font-bold text-md sm:text-lg text-gray-700'
                id='cost-price'>
                <p>Cost Price:</p>
                <p>{product.cost}</p>
              </span>
              <span
                className='flex justify-between max-w-full px-2 py-1 font-bold text-md sm:text-lg text-gray-700'
                id='selling-price'>
                <p>Selling Price:</p>
                <p>{product.sell}</p>
              </span>
            </div>
            {displaybutton()}
          </div>
        </div>
      );
    });
    return productCard;
  };
  if (!Product) {
    return null;
  }
  return (
    <div className='product-container w-full grid grid-flow-col md:grid-flow-col md:grid-rows-2 content-start gap-y-4 px-2'>
      {RenderProduct()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    signIn: state.AuthReducer.signIn,
    Product: state.ProductReducer.product
  };
};
export default connect(mapStateToProps, { fetchProducts })(ProductList);
