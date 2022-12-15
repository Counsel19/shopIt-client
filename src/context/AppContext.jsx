import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import * as ACTIONS from "./actions";
import appReducer from "./appReducer";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const initialState = {
    users: null,
    products: null,
    search: "",
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getAllProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products/");
    dispatch({ type: ACTIONS.SET_PRODUCTS, payload: { products: data } });
  };

  const handleInputChange = (field, value) => {
    dispatch({ type: ACTIONS.CHANGE_FIELD_VALUE, payload: { field, value } });
  };
  return (
    <AppContext.Provider
      value={{ ...state, dispatch, getAllProducts, handleInputChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
