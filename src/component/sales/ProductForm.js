import React from "react";
import { Field, reduxForm } from "redux-form";

const ProductForm = props => {
  //   console.log(props.initialValues.registeredFields);
  const renderInput = ({ input, label, meta }) => {
    const renderErrors = ({ error, touched }) => {
      if (error && touched) {
        return <p className='text-red-500 text-xs italic pt-2'>{`${error}`}</p>;
      }
    };

    return (
      <div>
        <label
          className={`block text-sm font-medium ${props.text} mt-2 my-1.5`}>
          {label}
        </label>
        <input
          name={input.name}
          {...input}
          className={`shadow appearance-none border border-gray-500 bg-gray-200 rounded-sm w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline`}
        />
        {renderErrors(meta)}
      </div>
    );
  };

  const sumbitValues = values => {
    props.action(values);
  };

  return (
    // <div className='w-screen min-h-screen bg-red-100 overflow-hidden bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900'>
    //   <div className='mb-6'>

    //   </div>
    <div className='w-full h-4/5 flex justify-center sm:justify-start items-center sm:m-10'>
      <div className='h-3/5 w-80 mx-3 sm:w-96 pb-5 '>
        <form className='' onSubmit={props.handleSubmit(sumbitValues)}>
          <div className='w-4/5 h-4/5 py-4 mx-auto '>
            {/* <h3 className='text-md font-lighter font-bold text-white'>
              Create New Product
            </h3> */}
            {/* <span className=' inline-block w-full h-0.5 rounded-lg bg-gradient-to-r from-red-600 via-orange-400 to-red-700'></span> */}

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

const mapStateToProps = state => {
  return {};
};

export default reduxForm({
  form: "CREATE_PRODUCT",
  validate
})(ProductForm);

// export default connect(mapStateToProps, { createProduct })(
//   reduxForm({
//     form: "CREATE_PRODUCT",
//     validate
//   })(ProductForm)
// );
