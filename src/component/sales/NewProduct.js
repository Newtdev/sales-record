import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "../Button";

const NewProduct = props => {
  const renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label className='block text-sm font-medium text-gray-700 mt-2'>
          {label}
        </label>
        <input
          name={input.name}
          {...input}
          className='mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-1 shadow-sm sm:text-sm border-gray-300 rounded-sm'
        />
      </div>
    );
  };

  const sumbitValues = values => {
    onSubmit(values);
  };
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-800'>
      <form
        className='h-96 w-full mx-3 px-2 bg-red-700 shadow-lg sm:w-96'
        onSubmit={props.handleSubmit(sumbitValues)}>
        <div className='w-4/5 h-4/5 py-4 mx-auto '>
          <h3 className='text-md font-lighter font-serif'>
            Create New Product
          </h3>
          <span className=' inline-block w-full h-0.5 rounded-lg bg-gradient-to-r from-red-600 via-orange-400 to-red-700'></span>

          <div>
            <div className='col-span-6 sm:col-span-4'>
              <Field
                label='Product Name'
                component={renderInput}
                type='text'
                name='product-name'
                id='product-name'
              />
            </div>

            <div className='col-span-6 sm:col-span-4'>
              <Field
                label='Supplied Quantity'
                component={renderInput}
                type='text'
                name='supplied-quantity'
                id='supplied'
              />
            </div>

            <div className='col-span-6 sm:col-span-4'>
              <Field
                label='Cost Price'
                component={renderInput}
                type='text'
                name='cost-price'
                id='cost'
              />
            </div>

            <div className='col-span-6 sm:col-span-4'>
              <Field
                label='Selling Price'
                type='text'
                name='selling-price'
                component={renderInput}
                id='selling'
              />
            </div>
          </div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "CREATE_PRODUCT"
})(NewProduct);
