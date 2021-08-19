import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import ProductForm from "./ProductForm";

const EditProduct = ({ productDetails, closeModal, productId }) => {
  const { name, quantity, cost, sell } = productDetails;
  const button = () => {
    return (
      <button
        onClick={() => closeModal()}
        className='mt-1 w-4/5 block rounded-sm shadow-lg bg-gray-300 text-base py-2 mx-auto text-center font-medium text-gray-700 hover:bg-gray-400 focus:outline-none '>
        Cancel
      </button>
    );
  };
  return (
    <div>
      <Modal>
        <ProductForm
          button={button()}
          text={"text-gray-700"}
          initialValues={{
            productName: `${name}`,
            suppliedQuantity: `${quantity}`,
            costPrice: `${cost}`,
            sellingPrice: `${sell}`
          }}
        />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  state = Object.values(state.ProductReducer.product);
  const [data] = state.filter(cur => cur.id === ownprops.productId);

  return { productDetails: data };
};
export default connect(mapStateToProps)(EditProduct);
