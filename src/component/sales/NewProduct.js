import React from "react";
import ProductForm from "./ProductForm";
import { connect } from "react-redux";
import { createProduct } from "../../action";
import History from "../../History";
import Header from "../Header";

const NewProduct = props => {
  const userid = props.location.pathname.split("/")[3];
  const createAction = values => {
    props.createProduct(values, userid);
  };

  const button = () => {
    History.goBack();
  };
  const padding = 1.5;
  const color = "bg-gray-100";

  return (
    <div className='w-screen min-h-screen overflow-hidden bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900'>
      <div className='w-full bg-purple-900 shadow-md'>
        <Header></Header>
      </div>

      <ProductForm
        action={createAction}
        button={button}
        padding={padding}
        color={color}
        // pad={20}
        width={"full"}
        height={"full"}
        border={100}
        newText={"text-gray-200"}
      />
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
