import React from "react";
import { connect } from "react-redux";
import { editProduct } from "../../action";
import Modal from "../Modal";
import ProductForm from "./ProductForm";

const EditProduct = ({
  productDetails,
  closeModal,
  productId,
  editProduct
}) => {
  const { name, quantity, cost, sell } = productDetails;

  const createAction = values => {
    editProduct(values, productId);
    closeModal();
    setTimeout(() => {
      closeModal();
    }, 1000);
  };
  const Text = "hidden";

  const button = () => {
    closeModal();
  };

  return (
    <div>
      <Modal removed={"hidden"}>
        <ProductForm
          hidText={Text}
          action={createAction}
          button={button}
          text={"text-gray-700"}
          color={"bg-gray-200"}
          border={400}
          width={96}
          pad={0}
          height={70}
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
export default connect(mapStateToProps, { editProduct })(EditProduct);
