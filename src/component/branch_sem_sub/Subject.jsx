import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
export default function Subject(props) {
    const [isLoading, setisLoading] = useState(false);
    const [isDisable, setisDisable] = useState(false);
    const { register, handleSubmit } = useForm();
    const [subjects, setsubjects] = useState([]);
    useEffect(() => {
        getSubject();
    }, [subjects])
    const getSubject = async () => {
        const res = await axios.get("/subject/getALl")
        setsubjects(res.data.data);
        // console.log(res.data.data);
    }


    const submitHandler = async (data) => {
        setisDisable(true);
        setisLoading(true);
        const res = await axios.post("/subject/add", data);
        setisDisable(false);
        setisLoading(false);
        console.log(res.data);
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
                    <h1 className="h4 text-gray-900 mb-4">Add Subject</h1>
                </div>
                <form className="user" onSubmit={handleSubmit(submitHandler)}>
                    <div className="form-group">
                        <input
                            {...register("subjectName")}
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter Subject Name"
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                                {...register("subjectCode")}
                                type="number"
                                className="form-control form-control-user"
                                placeholder="Enter Subject Code"
                            />
                        </div>
                        <div className="col-sm-6">
                            <input
                                {...register("credits")}
                                type="number"
                                className="form-control form-control-user"
                                placeholder="Enter Subject Credit"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            {...register("docURL")}
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Enter DOC URL"
                        />
                    </div>

                    <div>
                        <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="AddSubject" />
                    </div>
                    <hr />
                </form>
            </div>
            <table className='table table-bordered h4 text-gray-900'>
                <thead>
                    <tr>
                        <th scope='col'>Subject Name</th>
                        <th scope='col'>Subject Code</th>
                        <th scope='col'>DOC URL</th>
                        <th scope='col'>Subject Credits</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        subjects?.map((sub) => {
                            return (
                                <tr>
                                    <td>{sub.subjectName}</td>
                                    <td>{sub.subjectCode}</td>
                                    <td>{sub.docURL}</td>
                                    <td>{sub.credits}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
