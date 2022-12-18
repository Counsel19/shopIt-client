import React, { useState } from "react";
import "./Login.css";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidator } from "../lib/formValidator";
import { useAppContext } from "../context/AppContext";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const { login, isLoading } = useAppContext();
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
