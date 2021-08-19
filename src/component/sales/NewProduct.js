import React from "react";
import ProductForm from "./ProductForm";
import { connect } from "react-redux";
import { createProduct } from "../../action";

import History from "../../History";

const NewProduct = props => {
  const createAction = values => {
    props.createProduct(values);
  };

  return (
    <div className='w-screen min-h-screen bg-red-100 overflow-hidden bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900'>
      <ProductForm action={createAction} />

      <button
        onClick={() => History.goBack()}
        className='mt-1 w-4/5 block rounded-sm shadow-lg bg-white text-base py-2 mx-auto text-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '>
        Cancel
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { createProduct })(NewProduct);

// export default Wrapper()(connect(mapStateToProps, { signIN }));
