import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import NavbarSlider from '../NavbarSlider';



export default function Register() {    
    const { register, handleSubmit } = useForm();
    const [isLoading, setisLoading] = useState(false);
    const [isDisable, setisDisable] = useState(false);
    const [branches, setbranches] = useState([]);
    const [semisters, setsemisters] = useState([])
    useEffect(() => {
        getBranch();
        getSem();
    }, []);
    const getBranch = async () => {
        const res = await axios.get("/branch/getAll");
        setbranches(res.data.data);
        console.log(res.data.data);
    }
    const getSem = async () => {
        const res = await axios.get("/sem/getAll");
        setsemisters(res.data.data);
        console.log(res.data.data);
    }
    const submitHandler = async (data) => {

        setisLoading(true);
        setisDisable(true);

        const res = await axios.post("/student/add", data);
        setisLoading(false);
        setisDisable(false);
        console.log(res.data);
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
            <h1>Student Registration</h1>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>

                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="userfName"
                            id="userfName"
                            {...register("firstName")}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="userlName"
                            id="userlName"
                            {...register("lastName")}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="enrollmentNumber">Enrollment Number</label>
                        <input type="number" {...register("enrollmentNumber")} />
                    </div>
                    <br />
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
                        <label htmlFor="mobileNo">Mobile Number  </label>
                        <input type="phone" {...register("mobileNo")} />
                    </div>
                    <br />
                    <div>
                        <select name="" id="">
                            <option value="" selected>select</option>
                            {
                                branches?.map((branch) => {
                                    return <option value={branch._id}  {...register("branch")}>{branch.branchName}</option>
                                })
                            }
                        </select>
                    </div>

                    <br />
                    <div>
                        <select name="" id="">
                            <option value="" selected>select</option>
                            {
                                semisters?.map((sem) => {
                                    return <option value={sem._id}  {...register("sem")}>{sem.title}</option>
                                })
                            }
                        </select>
                    </div>

                    <br />
                    <div>
                        <input disabled={isDisable} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>

    );
};