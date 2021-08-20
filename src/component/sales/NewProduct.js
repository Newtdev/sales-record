import React from "react";
import ProductForm from "./ProductForm";
import { connect } from "react-redux";
import { createProduct } from "../../action";
import History from "../../History";

const NewProduct = props => {
  const createAction = values => {
    props.createProduct(values);
  };

  const button = () => {
    History.goBack();
  };
  return (
    // <div className='min-h-screen w-1/2 bg-white pb-5 '>
    <div className='w-screen min-h-screen overflow-hidden bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900'>
      <ProductForm action={createAction} button={button} />
    </div>
    // <div></div>
    // </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { createProduct })(NewProduct);

// export default Wrapper()(connect(mapStateToProps, { signIN }));
