import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setisLoading] = useState(false);
    const [isDisable, setisDisable] = useState(false);
    const submitHandler = async (data) => {

        try {
            setisLoading(true);
            setisDisable(true);
            const res = await axios.post('/student/login', data);
            setisLoading(false);
            setisDisable(false);
            console.log(res);
            console.log("id : ", res.data.data);
            // console.log("token ",res.data.data);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.data);


        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div>
            {
                isLoading && (
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                )
            }
            <h1>Student Login</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email")} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")} />
                    </div>
                    <br />
                    <div>
                        <input disabled={isDisable} type="submit" value="Login" />
                    </div>

                </form>
            </div>
        </div>

    );
};
