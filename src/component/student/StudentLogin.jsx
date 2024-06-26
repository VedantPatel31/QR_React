import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import validationSchema from '../utils/ValidationSchema';
import { ToastContainer, toast } from 'react-toastify';
export default function StudentLogin() {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [isLoading, setisLoading] = useState(false);
    const [isDisable, setisDisable] = useState(false);
    const submitHandler = async (data) => {

        try {
            setisLoading(true);
            setisDisable(true);
            const res = await axios.post('/student/login', data);
            setisLoading(false);
            setisDisable(false);
            toast.success('Student login successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log(res);
            // console.log("id : ", res.data.data);
            // console.log("token ",res.data.data);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.data);


        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="container">
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
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Student</h1>
                                        </div>
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit(submitHandler)}>
                                            <div className="form-group">
                                                <input
                                                    {...register("email",validationSchema.email)}
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                />
                                                   {errors.email && <span>{errors.email.message}</span>}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    {...register("password",validationSchema.password)}
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                />
                                                {errors.password && <span>{errors.password.message}</span>}
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="Login" />
                                            </div>
                                            <hr />
                                            <a
                                                href="index.html"
                                                className="btn btn-google btn-user btn-block"
                                            >
                                                <i className="fab fa-google fa-fw" /> Login with Google
                                            </a>

                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">
                                                Create an Account!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
