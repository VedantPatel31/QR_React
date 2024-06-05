import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function DemoValidation() {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const [isLoading, setisLoading] = useState(false)
    const validationSchema = {
        name: {
            required: {
                value: true,
                message: "Name is required",
            },
        },
        email: {
            required: {
                value: true,
                message: "Email is required"
            }
        },
        age: {
            required: {
                value: true,
                message: "Age is required"
            },
            min: {
                value: 18,
                message: "Age must be greater than 18"
            }
        },
    };
    const submitHandler = async (data) => {
        // var userObj = {
        //     name: data.name,
        //     email: data.email,
        //     age: parseInt(data.age),
        //     isActive: data.isActive === "true" ? true : false,
        // };
        // console.log(userObj);
    }

    return (
        <div>
            <h1>Add Users</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' {...register("name", validationSchema.name)} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" {...register("email", validationSchema.email)} />
                        {errors.email && errors.email.message}
                    </div>
                    <div>
                        <label htmlFor="">Age</label>
                        <input type="text" name='age'{...register("age", validationSchema.age)} />
                        {errors.age && errors.age.message}
                    </div>
                    <div>
                        <label htmlFor="">Status</label>
                        True : <input type="radio" name="isActive" value="true" {...register("isActive")} />
                        False : <input type="radio" name="isActive" value="false" {...register("isActive")} />
                    </div>
                    <div>
                        <button type='submit'>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
