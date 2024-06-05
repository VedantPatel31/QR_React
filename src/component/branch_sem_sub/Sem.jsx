import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Sem(props) {
    const [isLoading, setisLoading] = useState(false)
    const [isDisable, setisDisable] = useState(false)
    const { register, handleSubmit } = useForm();
    const [semisters, setsemisters] = useState([])
    useEffect(() => {
        getSem();
    }, [semisters]);
    const getSem = async () => {
        // setisLoading(true);
        
        const res = await axios.get("/sem/getALl");
        // setisLoading(false);
        setsemisters(res.data.data);
        // console.log(res.data.data);
    }
    const submitHandler = async (data) => {
        setisDisable(true);
        setisLoading(true);
        const res = await axios.post("/sem/add", data);
        console.log(res.data);
        setisDisable(false);
        setisLoading(false);
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
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
                </div>
            <div className='my-card'>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Add Semister</h1>
                </div>
                <form className="user" onSubmit={handleSubmit(submitHandler)}>
                    <div className="form-group">
                        <input
                            {...register("title")}
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter Semister"
                        />
                    </div>
                    <div>
                        <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="AddSemister" />
                    </div>
                    <hr />
                </form>
            </div>
            <table className='table table-bordered h4 text-gray-900'>
                <thead>
                    <tr>
                        <th scope='col'>Semister</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        semisters?.map((sem) => {
                            return (
                                <tr>
                                    <td>{sem.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
