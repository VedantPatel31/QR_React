import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import validationSchema from '../utils/ValidationSchema';
export default function FacultyRegister(props) {
  const [isLoading, setisLoading] = useState(false);
  const [isDisable, setisDisable] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitHandler = async (data) => {
    setisLoading(true);
    setisDisable(true);
    const res = await axios.post("/faculty/add", data)
    setisDisable(false);
    setisLoading(false);
    // console.log(res.data);
    toast.success('Faculty added successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="container my-8 mb-8" >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {
        isLoading && (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        )
      }
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
      </div>
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            {/* <div className="col-lg-5 d-none d-lg-block bg-register-image" /> */}
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-2">Faculty</h1>
                </div>
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                        {...register("firstName", validationSchema.name)}
                      />
                      {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                        {...register("lastName", validationSchema.name)}
                      />
                      {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      {...register("email", validationSchema.email)}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        {...register("password", validationSchema.password)}
                      />
                      {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <div>
                    <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="register" />
                  </div>
                  <hr />
                  <a
                    href="index.html"
                    className="btn btn-google btn-user btn-block"
                  >
                    <i className="fab fa-google fa-fw" /> Register with Google
                  </a>

                </form>
                <hr />
                <div className="text-center">
                  <a className="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="small" href="login.html">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
