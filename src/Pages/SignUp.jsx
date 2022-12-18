import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useFormik } from "formik";
import { registerValidator } from "../lib/formValidator";
import { useAppContext } from "../context/AppContext";

const SignUp = () => {
  const { register } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const user = await register(values);
    if (user) {
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },

    validate: registerValidator,
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
      <Link to="/login" className="flex text-blue-900 gap-4 items-center">
        <BsArrowLeft /> Back to Login Page
      </Link>
      <h2 className="mb-[1.5rem]  font-bold text-xl mt-[2rem] brand text-center">
        Welcome to the Test<span>Commerce</span>
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="form flex-col items-center w-full gap-4 "
      >
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Enter your Full name"
            {...formik.getFieldProps("fullname")}
            className="w-full px-8 py-4 rounded-lg font-medium bg-blue-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          {formik.errors.fullname && formik.touched.fullname ? (
            <span className="text-sm text-rose-500">
              {formik.errors.fullname}
            </span>
          ) : null}
        </div>
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
          className="mt-5 disabled:bg-indigo-200 tracking-wide font-semibold bg-indigo-600 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center gap-2 justify-center focus:shadow-outline focus:outline-none"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
