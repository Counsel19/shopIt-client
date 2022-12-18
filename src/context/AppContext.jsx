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
    user: null,
    token: null,
    products: null,
    allCategories: null,
    categoryFilter: "",
    search: "",
    sort: { name: "Lastest", value: "lastest" },
    isLoading: false,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getAllProducts = async () => {
    try {
      const { categoryFilter, search, sort } = state;
      let url = "http://localhost:5000/api/products/";

      if (categoryFilter) {
        url = url + `?filter=${categoryFilter}`;
      }
      if (search) {
        url = url + `?search=${search}`;
      }
      if (sort) {
        url = url + `?sort=${sort.value}`;
      }
      const { data } = await axios.get(url);
      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: { products: data } });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/categories");
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
        payload: { allCategories: data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (payload) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        payload
      );
      dispatch({
        type: ACTIONS.SET_USER,
        payload: { user: data.newUser, token: data.token },
      });
      return data.newUser;
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (payload) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: true } });
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        payload
      );
      dispatch({
        type: ACTIONS.SET_USER,
        payload: { user: data.user, token: data.token },
      });
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
      return data.user;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (field, value) => {
    dispatch({ type: ACTIONS.CHANGE_FIELD_VALUE, payload: { field, value } });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        getAllProducts,
        handleInputChange,
        getAllCategories,
        register,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
