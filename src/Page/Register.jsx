import React from "react";
import { Formik } from "formik";
import Error from "../Error";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { AuthRegister } from "../redux/action/authAction";
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Fill it, please"),
  email: Yup.string().email().required("Fill it, please"),
  password: Yup.string().min(8, "Minimum 8 chara").required("Fill it, please"),
  jenisKelamin: Yup.string().required("Fill it, please"),
});

function Register(props) {
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const [error, setError] = React.useState({});
  const isLoading = useSelector((state) => state.auth.isLoading);
  const initialState = {
    name: "",
    email: "",
    password: "",
    jenisKelamin: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const result = await dispatch(AuthRegister(values));
    console.log("hasil", result.status);
    if (result.errors.email.msg === "E-mail sudah digunakan") {
      setError(result.errors.email);
    }
    if (result.status === "succes") {
      return navigate("/dashboard");
    }
    console.log("hasil", result.errors.email);
  };
  return (
    <React.Fragment>
      <Layout>
        <div className="flex justify-center h-full">
          <div className="top absolute pt-8">
            <h5 className="text-gray-500 cursor-default">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </span>
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center w-5/6 mt-1 sm:mt-5">
            <div className="ml-20">
              <h1 className="font-bold text-4xl">Get Started</h1>
              <p className="w-10/12 pt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                libero nobis
              </p>
              
            </div>
            <Formik
              initialValues={initialState}
              validationSchema={RegisterSchema}
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
                  className="flex flex-col bg-modal-2 py-5 px-10 rounded w-8/12 mt-4"
                >
                  <input
                    error={errors.name && touched.name}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="py-4 px-4 mb-0 rounded border border-solid border-purple-500 text-gray-000 placeholder-gray-000 font-semibold focus:border-blue-400"
                  />
                  {errors.name && touched.name && <Error>{errors.name}</Error>}
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
                    className="py-4 px-4 rounded mt-7 border border-solid border-purple-500 text-gray-000 placeholder-gray-000 font-semibold"
                  />
                  {errors.email && touched.email && (
                    <Error>{errors.email}</Error>
                  )}
                  <p className="text-purple-500 font-bold"> {error?.msg}</p>
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
                  <div className="grid gap-1 pt-5 capitalize">
                    <label
                      data-cy="modal-add-priority-title"
                      htmlFor=""
                      className="capitalize text-xl font-semibold  popin"
                    >
                      Gender
                    </label>
                    <select
                    defaultValue={"laki-laki"}
                      data-cy="modal-add-priority-dropdown"
                      name="jenisKelamin"
                      onChange={handleChange}
                      onBlur={handleChange}
                      className="outline-none border pl-2 px-3 border-purple-500 rounded-md h-12 capitalize"
                    >
                      <option
                      selected
                        className=""
                        
                        data-cy="modal-add-priority-item"
                        value="laki-laki"
                      >
                        Male
                      </option>
                      <option
                        data-cy="modal-add-priority-item"
                        value="perempuan"
                      >
                        Female
                      </option>
                    </select>
                  </div>
                  <div className="grid gap-1 pt-5 capitalize">
                    <label
                      data-cy="modal-add-priority-title"
                      htmlFor=""
                      className="capitalize text-xl font-semibold  popin"
                    >
                      Status
                    </label>
                    <select
                      data-cy="modal-add-priority-dropdown"
                      name="status"
                      onChange={handleChange}
                      onBlur={handleChange}
                      className="outline-none border pl-2 px-3 border-purple-500 rounded-md h-12 capitalize"
                    >
                      <option
                        className=""
                        defaultValue={"active"}
                        data-cy="modal-add-priority-item"
                        value="active"
                      >
                        Active
                      </option>
                      <option
                        data-cy="modal-add-priority-item"
                        value="nonactive"
                      >
                        Non-Active
                      </option>
                    </select>
                  </div>
                  <Button  onClick={() => {
                      setShow(true);
                      setTimeout(() => {
                        setShow(false);
                      }, 2000);
                    }}  type="submit" block variant="solid" color="blue">
                    {isLoading ? "loading..." : "Klik"}
                  </Button>{" "}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default Register;
