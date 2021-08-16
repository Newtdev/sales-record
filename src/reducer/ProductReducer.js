import Type from "../action/Type";

const {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  EDIT_PRODUCT
} = Type;

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, product: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, product: action.payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter(product => product !== action.payload)
      };
    default:
      return state;
  }
};

// res.data[0].id;
export default productReducer;