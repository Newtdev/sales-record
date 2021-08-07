import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { signIN } from "../../action";

import Button from "../Button";
import { Link } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import History from "../../History";

const NewProduct = props => {
  const renderInput = ({ input, label, meta }) => {
    const renderErrors = ({ touched, error }) => {
      if (touched && error) {
        return <p className='text-red-500 text-xs italic pt-2'>{`${error}`}</p>;
      }
    };
    return (
      <div>
        <label className='block text-sm font-medium text-gray-800 mt-2 my-1.5'>
          {label}
        </label>
        <input
          name={input.name}
          {...input}
          className={`shadow appearance-none border bg-gray-300 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline`}
        />
        {renderErrors(meta)}
      </div>
    );
  };

  const sumbitValues = values => {
    console.log(values);
  };
  if (props.signIN) {
    History.push("/");
  }
  return (
    <div className='w-screen h-screen bg-red-100 side-image overflow-hidden'>
      <div>
        {/* <Header></Header> */}
        <DashboardHeader />
      </div>
      <div className='w-full h-screen flex justify-center items-start sm:items-center'>
        <form
          className='h-5/5 sm:h-4/5 w-80 mx-3 px-2 bg-white shadow-lg sm:w-96'
          onSubmit={props.handleSubmit(sumbitValues)}>
          <div className='w-4/5 h-4/5 py-4 mx-auto '>
            <h3 className='text-md font-lighter font-bold text-gray-500'>
              Create New Product
            </h3>
            <span className=' inline-block w-full h-0.5 rounded-lg bg-gradient-to-r from-red-600 via-orange-400 to-red-700'></span>

            <div>
              <div className='col-span-6 sm:col-span-4'>
                <Field
                  label='Product Name'
                  component={renderInput}
                  type='text'
                  name='productName'
                  id='product-name'
                />
              </div>

              <div className='col-span-6 sm:col-span-4'>
                <Field
                  label='Supplied Quantity'
                  component={renderInput}
                  type='text'
                  name='suppliedQuantity'
                  id='supplied'
                />
              </div>

              <div className='col-span-6 sm:col-span-4'>
                <Field
                  label='Cost Price'
                  component={renderInput}
                  type='text'
                  name='costPrice'
                  id='cost'
                />
              </div>

              <div className='col-span-6 sm:col-span-4'>
                <Field
                  label='Selling Price'
                  type='text'
                  name='sellingPrice'
                  component={renderInput}
                  id='selling'
                />
              </div>
            </div>
            {/* <div> */}
            <Button>Submit</Button>
            <Link
              to={`/dashboard/${props.user.id}`}
              className='mt-3 w-full block rounded-md border border-gray-300 shadow-lg bg-white text-base py-2 px-4 mx-auto text-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '>
              Cancel
            </Link>
            {/* </div> */}
            {/* <Button>Cancel</Button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

const validate = values => {
  const errors = {};
  if (!values.productName) {
    errors.productName = "Product Name is required";
  }
  if (!values.suppliedQuantity) {
    errors.suppliedQuantity = "Product Quantity is required";
  }
  if (!values.costPrice) {
    errors.costPrice = " Cost Price is required";
  }
  if (!values.sellingPrice) {
    errors.sellingPrice = "Selling Price is required";
  } else {
    return errors;
  }
};

const mapStateToProps = state => {
  return { user: state.AuthReducer.signIn, session: state.AuthReducer.signIn };
};

export default connect(mapStateToProps, { signIN })(
  reduxForm({
    form: "CREATE_PRODUCT",
    validate
  })(NewProduct)
);

// export default Wrapper()(connect(mapStateToProps, { signIN }));
