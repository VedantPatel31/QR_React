import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import QRCode1 from 'react-qr-code'
export default function QRCode(props) {
    const [branches, setbranches] = useState([]);
    const [semisters, setsemisters] = useState([])
    const [subjects, setsubjects] = useState([]);
    const { register, handleSubmit } = useForm();
    const [isDisable, setisDisable] = useState(false);
    const [isStop, setisStop] = useState(true);
    const [isLoading, setisLoading] = useState(false);
    const [value, setValue] = useState();
    const [userId, setuserId] = useState(localStorage.getItem("userId"));
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    useEffect(() => {
        getBranches();
        getSem();
        getSubject();
    }, [])
    const submitHandler = async (data) => {
        setuserId(localStorage.getItem("userId"));
        const data1 = {
            data: data,
            facultyId: userId
        }
        setisDisable(true);
        setisLoading(true);
        setisStop(false);
        const res = await axios.post('/qrcode/generate', data1);
        setValue(res.data.data);
        setisLoading(false);
        setisDisable(false);
        console.log(res.data);
    }
    const getBranches = async () => {
        const res = await axios.get("/branch/getALl")
        setbranches(res.data.data);
        console.log(res.data.data);
    }
    const getSem = async () => {
        const res = await axios.get("/sem/getALl")
        setsemisters(res.data.data);
        console.log(res.data.data);
    }
    const getSubject = async () => {
        const res = await axios.get("/subject/getALl")
        setsubjects(res.data.data);
        console.log(res.data.data);
    }
    const stopQR = async () => {
        setisLoading(true);
        setisStop(true)
        const data = {
            qrText: value
        }
        const res = await axios.put('/qrcode/complete', data);
        setisLoading(false);
    }

    return (
        <div className='flex'>
            <div>
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
                <div className='my-qr-text-card'>
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Generate QR</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit(submitHandler)}>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <select className="form-control" aria-label="Default select example" {...register("branch")}>
                                    <option selected>Select Field</option>
                                    {
                                        branches?.map((branch) => {
                                            return <option value={branch._id}>{branch.branchName}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <select className="form-control " aria-label="Default select example"  {...register("sem")}>
                                    <option selected>Select Semister</option>
                                    {
                                        semisters?.map((sem) => {
                                            return <option value={sem._id}>{sem.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <select className="form-control " aria-label="Default select example"  {...register("subject")}>
                                <option selected>Select Subject</option>
                                {
                                    subjects?.map((sub) => {
                                        return <option value={sub._id}>{sub.subjectName}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="generate" />
                        </div>
                        <br />
                        <div>
                            <input className="btn btn-danger btn-user btn-block" disabled={isStop} type="submit" value="stop" onClick={stopQR} />
                        </div>

                        <hr />
                    </form>
                </div >
            </div >
            <div className='my-qr-text-card '>
                <h1>Attendace : </h1>
                <center>
                    {value && (
                        <QRCode1
                            title="GeeksForGeeks"
                            value={value}
                            bgColor={back}
                            fgColor={fore}
                            size={size === '' ? 0 : size}
                        />
                    )}
                </center>
            </div>
        </div>
    )
}

