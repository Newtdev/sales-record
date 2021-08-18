import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import ProductForm from "./ProductForm";

const EditProduct = ({ productDetails, closeModal, productId }) => {
  const button = () => {
    return (
      <button
        onClick={() => closeModal()}
        className='mt-1 w-4/5 block rounded-sm shadow-lg bg-gray-300 text-base py-2 mx-auto text-center font-medium text-gray-700 hover:bg-gray-400 focus:outline-none '>
        Cancel
      </button>
    );
  };
  if (!productDetails) {
    return null;
  }
  return (
    <div>
      <Modal>
        <ProductForm
          button={button()}
          text={"text-gray-700"}
          //   initialValues={checkId}
        />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  return {};
};
export default connect(null)(EditProduct);
