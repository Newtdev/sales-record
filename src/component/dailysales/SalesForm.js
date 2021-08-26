import React from "react";
import { Field, reduxForm } from "redux-form";

const SalesForm = props => {
  const renderInput = ({ input }) => {
    return (
      <div className='py-1.5'>
        <input
          placeholder={input.name}
          name={input.name}
          {...input}
          className={`shadow border border-gray-100 rounded-sm w-full py-2 px-10 capitalize text-gray-800 focus:outline-none focus:shadow-outline`}
        />
      </div>
    );
  };
  const Submit = values => {
    console.log(values);
  };

  return (
    <div>
      <form
        className={`ml-2 w-full pb-5 `}
        onSubmit={props.handleSubmit(Submit)}>
        <div className='w-full px-6 h-4/5 mx-auto py-4'>
          <div className='w-full flex items-center'>
            <div className='col-span-6 sm:col-span-4 mr-2'>
              <Field
                component={renderInput}
                type='text'
                name='product Name'
                id='product-name'
                productLabel='Product Name'
              />
            </div>
            <div className='col-span-6 sm:col-span-4 mr-2'>
              <Field
                component={renderInput}
                type='text'
                name='price'
                id='price'
              />
            </div>

            <div className='col-span-6 sm:col-span-4 mr-2'>
              <Field
                component={renderInput}
                type='text'
                name='Quantity'
                id='supplied'
                productLabel='Quantity'
              />
            </div>
            <button
              type='submit'
              className='block rounded-sm shadow-lg bg-purple-700 text-base py-2 px-8 font-semibold text-center font-medium text-white hover:bg-purple-800 focus:outline-none'>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "CREATE_SALES"
})(SalesForm);
