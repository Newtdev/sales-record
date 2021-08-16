import React from "react";
import Modal from "../Modal";
import History from "../../History";
import { deleteProduct } from "../../action";
import { connect } from "react-redux";

const DeleteProduct = props => {
  const Header = "Delete Product";
  const description = "Are you sure you want to delete this product?";

  // const onDelete = () => {
  //   // props.deleteProduct(props.match.params.id);
  //  props.onClose
  //   // if (props.show) {
  //   //   return null;
  //   // }
  // };
  const button = (
    <div className='w-52 flex justify-between items-center px-6'>
      <button
        onClick={() => History.goBack()}
        className='block rounded-md border border-gray-300 shadow-lg bg-white text-base px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '>
        Cancel
      </button>
      <button
        onClick={props.onClose}
        type='button'
        className=' block rounded-md border shadow-lg bg-red-600 px-4 py-2 text-center font-medium text-white font-bold hover:bg-red-700  mx-3'>
        Delete
      </button>
    </div>
  );
  return (
    <div>
      <Modal title={Header} description={description} button={button} />
    </div>
  );
};

export default connect(null, { deleteProduct })(DeleteProduct);
