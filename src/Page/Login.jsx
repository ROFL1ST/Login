import React, { useEffect, useRef } from "react";
import { Formik } from "formik";
import Error from "../Error";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Info from "../modal/Info";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import { AuthLogin } from "../redux/action/authAction";
const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Fill it, please"),
  email: Yup.string().email().required("Fill it, please"),
  password: Yup.string().min(8, "Minimum 8 chara").required("Fill it, please"),
});
function Login(props) {
  const [error, setError] = React.useState({});
  const ref = useRef();
  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const result = await dispatch(AuthLogin(values));
    if (result.status === "fail") {
      setError(result);
    }
    if (result.status === "Success") {
      return navigate("/");
    }
    console.log("hasil", result);
  };
  return (
    <React.Fragment>
      <Layout>
        <div className="flex justify-center h-full">
          <div className="top absolute pt-8">
            <h5 className="text-gray-500 cursor-default">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </span>
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center w-5/6 mt-1 sm:mt-5">
            <div className="ml-44">
              <h1 className="font-bold text-4xl">Welcome Back!</h1>
              <p className="w-9/12 pt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                dignissimos hic sapiente non amet aliquid.
              </p>
            </div>
            <Formik
              initialValues={initialState}
              validationSchema={LoginSchema}
              enableReinitialize
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
                setFieldValue,
                isSubmitting,
              }) => (
                <form
                  name="Feedback form"
                  onSubmit={handleSubmit}
                  className="flex flex-col bg-modal-2 py-5 px-10 rounded w-8/12 mt-9"
                >
                  <input
                    error={errors.email && touched.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                    className="py-4 px-4 rounded border border-solid border-purple-500 text-gray-000 placeholder-gray-000 font-semibold"
                  />
                  {errors.email && touched.email && (
                    <Error>{errors.email}</Error>
                  )}
                  <input
                    error={errors.password && touched.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                    className="py-4 px-4 rounded mt-7 border border-solid border-purple-500 text-gray-000 placeholder-gray-000 font-semibold"
                  />
                  {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                  )}

                  <button
                    onClick={() => {
                      setShow(true);
                      setTimeout(() => {
                        setShow(false);
                      }, 2000);
                    }}
                    type="submit"
                    className="bg-blue-700 mt-7 text-white font-bold tracking-wider py-4 px-4 rounded cursor-pointer transition-all hover:bg-blue-800"
                  >
                    Login
                  </button>
                </form>
              )}
            </Formik>
          </div>
          {show && <Info refisi={ref}></Info>}
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default Login;
