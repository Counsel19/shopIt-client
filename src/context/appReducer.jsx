import * as ACTIONS from "./actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload.allCategories,
      };
    case ACTIONS.USER_CART:
      return {
        ...state,
        userCart: action.payload.userCart,
      };
    case ACTIONS.USER_SAVED:
      return {
        ...state,
        userSaved: action.payload.userSaved,
      };
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };
    case ACTIONS.CLEAR_MESSAGE:
      return {
        ...state,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default appReducer;
