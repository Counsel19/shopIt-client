import React, { useState } from "react";
import "./Login.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidator } from "../lib/formValidator";
import { useAppContext } from "../context/AppContext";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const { login, isLoading, errorMsg, clearMessage } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const user = await login(values);
    if (user) {
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidator,
    onSubmit: handleSubmit,
  });

  return (
    <div
      className="
     w-[35%]
      h-[75%]
       flex
        flex-col
         m-auto
          mt-[4rem] main-div"
    >
       {errorMsg && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded fixed top-12 right-12 flex items-center justify-between gap-4"
            role="alert"
          >
            <strong className="font-bold">{errorMsg}!</strong>

            <span className="px-4 py-3" onClick={clearMessage}>
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      <Link to="/" className="flex text-blue-900 gap-4 items-center">
        <BsArrowLeft /> Back to Home
      </Link>
      <h2 className="mb-[1.5rem]  font-bold text-xl mt-[2rem] brand text-center">
        Welcome to the Test<span>Commerce</span>
      </h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col w-full">
          <input
            type="text"
            {...formik.getFieldProps("email")}
            placeholder="Enter your Email Address"
            className="w-full px-8 py-4 rounded-lg font-medium bg-blue-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="text-sm text-rose-500">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="flex flex-col w-full">
          <input
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="Password"
            className="w-full px-8 py-4 rounded-lg font-medium bg-blue-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />

          {formik.errors.password && formik.touched.password ? (
            <span className="text-sm text-rose-500">
              {formik.errors.password}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 disabled:bg-indigo-200 tracking-wide font-semibold bg-indigo-600 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center gap-2 justify-center focus:shadow-outline focus:outline-none"
        >
          Login
          {isLoading && <TailSpin height="20" width="20" />}
        </button>
      </form>
      <p className="text-center text-base text-gray-400">
        Not A User?{" "}
        <Link to="/signup" className="font-semibold text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
