import axios from 'axios';
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import { useForm } from 'react-hook-form';
export default function Branch(props) {
    const [isLoading, setisLoading] = useState(false)
    const [isDisable, setisDisable] = useState(false)
    const [branches, setbranches] = useState([])
    const { register, handleSubmit } = useForm();

    const submitHandler = async (data) => {
        setisDisable(true);
        setisLoading(true);
        const res = await axios.post('/branch/add', data);
        console.log(res.data);
        setisDisable(false);
        setisLoading(false);
    }
    useEffect(() => {
        getBranch();
    }, [branches]);
    const getBranch = async () => {
        // setisLoading(true);
        const res = await axios.get("/branch/getALl");
        // setisLoading(false);
        setbranches(res.data.data);
        // console.log(res.data.data);
    }

    const sendMessage = (data) => {
        console.log("send : ", data.message);
        const socket = io("http://localhost:3000");
        socket.emit("attendance-count", data.message);
    }

    return (
        <div className="container">
            {
                isLoading && (
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                )
            }
            <form onSubmit={handleSubmit(sendMessage)}>
                <div>
                    <input type="text" {...register("message")} />
                </div>
                <div>
                    <input type="submit" value="Send Message" />
                </div>
                {/* <p>{counter}</p> */}
            </form>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
            </div>
            <div className='my-card'>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Add Branch</h1>
                </div>
                <form className="user" onSubmit={handleSubmit(submitHandler)}>
                    <div className="form-group">
                        <input
                            {...register("branchName")}
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter Branch Name"
                        />
                    </div>
                    <div>
                        <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="AddBranch" />
                    </div>
                    <hr />
                </form>
            </div>
            <table className='table table-bordered h4 text-gray-900'>
                <thead>
                    <tr>
                        <th scope='col'>Branch</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        branches?.map((branch) => {
                            return (
                                <tr>
                                    <td>{branch.branchName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
