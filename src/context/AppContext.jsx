import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import * as ACTIONS from "./actions";
import appReducer from "./appReducer";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const loggedUser = JSON.parse(localStorage.getItem("user"));
const userToken = localStorage.getItem("token");

const AppContextProvider = ({ children }) => {
  const initialState = {
    users: null,
    user: loggedUser || null,
    token: userToken || null,
    products: null,
    allCategories: null,
    userCart: null,
    categoryFilter: "all",
    search: "",
    errorMsg: "",
    sort: { name: "Lastest", value: "lastest" },
    isLoading: false,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const authFetch = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  //request Interceptor
  authFetch.interceptors.request.use(
    (config) => {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: true } });
      config.headers.Authorization = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
      return Promise.reject(error);
    }
  );

  const getAllProducts = async () => {
    try {
      const { categoryFilter, search, sort } = state;
      let url = "http://localhost:5000/api/products/?";

      if (categoryFilter) {
        url = url + `filter=${categoryFilter}`;
      }
      if (search) {
        url = url + `&search=${search}`;
      }
      if (sort) {
        url = url + `&sort=${sort.value}`;
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

  const getUserCart = async () => {
    try {
      const { data } = await authFetch.get("/carts");
      dispatch({
        type: ACTIONS.USER_CART,
        payload: { userCart: data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (payload) => {
    try {
      await authFetch.post("/carts", payload);
      await getUserCart();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserCart = async (payload) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: true } });
      await authFetch.patch(`/carts/${payload._id}`, {
        quantity: payload.quantity,
      });
      await getUserCart();

      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUserCart = async (_id) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: true } });
      await authFetch.delete(`/carts/${_id}`);
      await getUserCart();

      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (payload) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: true } });
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        payload
      );
      dispatch({
        type: ACTIONS.SET_USER,
        payload: { user: data.newUser, token: data.token },
      });
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
      return data.newUser;
    } catch (error) {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
      console.log(error);
    }
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
      addUserToLocalStorage({ user: data.user, token: data.token });
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
      return data.user;
    } catch (error) {
      dispatch({ type: ACTIONS.SET_LOADING, payload: { isLoading: false } });
      setError(error);
    }
  };
  const setError = (error) => {
    if (error?.response) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { errorMsg: error.response.data.msg },
      });
    } else {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { errorMsg: error },
      });
    }

    setTimeout(() => dispatch({ type: ACTIONS.CLEAR_MESSAGE }), 5000);
  };

  const clearMessage = () => {
    dispatch({ type: ACTIONS.CLEAR_MESSAGE });
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
        getUserCart,
        addToCart,
        updateUserCart,
        deleteUserCart,
        clearMessage,
        register,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
