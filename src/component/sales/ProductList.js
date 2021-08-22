import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../../action";
import Loader from "../Loader";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const ProductList = ({ fetchProducts, Product, user_id }) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [productId, setProductId] = useState(null);
  const [editProduct, setEditProduct] = useState(false);

  useEffect(() => {
    fetchProducts(user_id);
  }, []);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, [fetchProducts]);

  const print = () => {
    fetchProducts(user_id);
    setActive(false);
  };

  const closeModal = () => {
    fetchProducts(user_id);
    setEditProduct(false);
  };

  const displaybutton = product => {
    return (
      <React.Fragment>
        <div className='' id='button-container'>
          <button
            onClick={() => {
              setProductId(product.id);
              setEditProduct(true);
            }}
            className='inline-block w-full py-3 sm:py-2.5 rounded px-4 align-baseline text-md text-center text-white bg-purple-800 hover:bg-purple-600 mt-4 shadow-lg'
            type='submit'>
            Edit Product
          </button>
        </div>

        <div>
          <button
            onClick={() => {
              setActive(true);
              setProductId(product.id);
            }}
            // to={`/product/${product.name}/${product.id}`}
            className='block w-full py-3 rounded px-4 align-baseline text-center text-md text-white bg-red-600 hover:bg-red-600 mt-4 shadow-lg'>
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
          className='product-card h-73 pb-6 sm:mx-0 rounded-md shadow-lg bg-gray-50 border border-indigo-700 mb-4'>
          <div className='h-full w-full px-4 py-2 '>
            <div
              id='product-name'
              className=' w-full flex justify-between items-center'>
              <h2 className='text-2xl text-gray-700 font-bold pt-2'>
                {product.name}
              </h2>
              <div>
                <Link
                  to={`/sales/${product.name}/${product.id}`}
                  className='font-bold text-md text-center text-indigo-700'
                  type='submit'>
                  Open Sales
                </Link>
              </div>
            </div>
            <div
              className='w-full py-2 flex flex-col justify-around'
              id='container'>
              <span
                className='flex justify-between max-w-full py-1 px-2 font-bold text-md sm:text-md text-gray-700'
                id='quantity'>
                <p>Quantity:</p>
                <p>{product.quantity} pcs</p>
              </span>
              <span
                className='flex justify-between max-w-full py-1 px-2 font-bold text-md sm:text-md text-gray-700'
                id='cost-price'>
                <p>Cost Price:</p>
                <p className='flex items-center justify-between'>
                  <small className='heading line-through text-2xl sm:text-4xl font-bold'>
                    N
                  </small>
                  {product.cost}
                </p>
              </span>
              <span
                className='flex justify-between max-w-full px-2 py-1 font-bold text-md sm:text-md text-gray-700'
                id='selling-price'>
                <p>Selling Price:</p>
                <p className='flex items-center justify-between'>
                  <small className='heading line-through text-2xl sm:text-4xl font-bold'>
                    N
                  </small>
                  {product.sell}
                </p>
              </span>
            </div>
            {displaybutton(product)}
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
    <div className='product-list w-full max-w-6xl flex justify-center sm:justify-evenly items-center flex-wrap mx-auto sm:mx-0 '>
      {!loading ? <Loader /> : RenderProduct()}

      {!active ? null : <DeleteProduct productId={productId} print={print} />}
      {!editProduct ? null : (
        <EditProduct productId={productId} closeModal={closeModal} />
      )}
    </div>
  );
};
// md:grid-flow-col md:grid-rows-2
const mapStateToProps = state => {
  return {
    signIn: state.AuthReducer.signIn,
    Product: state.ProductReducer.product
  };
};
export default connect(mapStateToProps, { fetchProducts })(ProductList);
