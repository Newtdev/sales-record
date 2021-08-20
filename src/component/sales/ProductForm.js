import React from "react";
import { Field, reduxForm } from "redux-form";

const ProductForm = props => {
  const renderInput = ({ input, label, meta }) => {
    const renderErrors = ({ error, touched }) => {
      if (error && touched) {
        return <p className='text-red-500 text-xs italic pt-1'>{`${error}`}</p>;
      }
    };

    return (
      <div>
        <label
          className={`block text-sm font-medium ${props.text} mt-1 my-1.5`}>
          {label}
        </label>
        <input
          name={input.name}
          {...input}
          className={`shadow  border border-gray-500 bg-gray-200 rounded-sm w-full py-1 px-2 text-gray-800 focus:outline-none focus:shadow-outline`}
        />
        {renderErrors(meta)}
      </div>
    );
  };

  const sumbitValues = values => {
    props.action(values);
  };

  return (
    <div className='w-full h-4/5 flex justify-center sm:justify-start items-center sm:m-10'>
      <div className='h-3/5 w-80 mx-3 sm:w-96 pb-5 '>
        <form
          className=' w-full bg-white pb-5'
          onSubmit={props.handleSubmit(sumbitValues)}>
          <div className={`w-4/5 h-4/5 py-4 mx-auto`}>
            <h3
              className={`text-md font-lighter font-bold text-indigo-900 ${[
                props.hidText
              ]}`}>
              Create New Product
            </h3>
            <span
              className={`inline-block w-full h-0.5 rounded-lg bg-gradient-to-r from-red-70 via-orange-400 to-red-70 ${props.hidText}`}></span>
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
            <button
              type='submit'
              className='mt-3 w-full block rounded-sm shadow-lg bg-indigo-500 text-base py-2 px-4 mx-auto text-center font-medium text-white hover:bg-indigo-700 focus:outline-none'>
              Submit
            </button>
            <button
              onClick={() => props.button()}
              className='mt-2 w-full block rounded-sm shadow-lg bg-gray-500 text-base py-2 mx-auto text-center font-medium text-white hover:bg-gray-2400 focus:outline-none '>
              Cancel
            </button>
            {/* </div> */}
            {/* <Button>Cancel</Button> */}
          </div>
          {props.button}
        </form>
      </div>
    </div>
  ); // </div>
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
  }
  return errors;
};

export default reduxForm({
  form: "CREATE_PRODUCT",
  validate
})(ProductForm);
