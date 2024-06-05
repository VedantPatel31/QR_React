import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import QRCode1 from 'react-qr-code'
import { useDispatch, useSelector } from 'react-redux';
import { totalAttendance } from '../redux/AttendanceSlice';
import { DataGrid } from '@mui/x-data-grid';
import io from 'socket.io-client';
export default function QRDemo(props) {

    const [branches, setbranches] = useState([]);
    const [semisters, setsemisters] = useState([])
    const [subjects, setsubjects] = useState([]);
    const [students, setstudents] = useState([])
    const [createAt, setcreateAt] = useState("")
    const { register, handleSubmit } = useForm();
    const [isDisable, setisDisable] = useState(false);
    const [isStop, setisStop] = useState(true);
    const [isLoading, setisLoading] = useState(false);
    const [value, setValue] = useState();
    const [userId, setuserId] = useState(localStorage.getItem("userId"));
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    const socket = io("http://localhost:3000");
    // const socket = io("https://nodebachend.onrender.com");


    const dispatch = useDispatch()
    // var createAt;
    const state = useSelector(state => state.atten.attendance)
    console.log("s : ", state);
    // const [count, setcount] = useState(0)
    const [counter, setcounter] = useState(0)
    const sendMessage = (data) => {
        console.log("send : ", data.message);
        socket.emit("attendance-count", data.message);
    }
    // useEffect(() => {

    // }, [])
    useEffect(() => {
        // console.log("hello");
        // const socket = io("http://localhost:3000");
        // console.log("socket : ",socket);

        // getBranches();
        // getSem();
        // getSubject();
        socket.on("abc", (data) => {
            console.log("data : ", data);
            setcounter(data)
            console.log("count : ", counter);
        })
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
        setValue(res.data.data.qrText);
        // setValue(res.data.data);
        setcreateAt(res.data.data.createdAt);
        // createAt = await res.data.data.createdAt;
        // getStudents();
        // await setcreateAt(res.data.data.createdAt);
        // console.log("in sub : ",createAt);
        setisLoading(false);
        setisDisable(false);
        console.log("qrtext : ", res.data.data.qrTexr);
    }
    // console.log("out sub : ",createAt);
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
    const getStudents = async () => {
        console.log("get  hello: ", createAt);
        // console.log("hi");
        setisLoading(true);
        setisDisable(true);
        const res = await axios.post("/attendance/liveView", { createAt: createAt });
        setisLoading(false);
        setisDisable(false);
        setstudents(res.data.data);
        console.log(res.data.data);
    }
    const converData = (students) => {
        return students?.map((stu) => ({
            // id : stu._id,
            studentEnrollment: stu.studentId.enrollmentNumber,
            studentName: stu.studentId.firstName,
            facultyName: stu.facultyId.firstName,
        }))
    }
    const columns = [
        // { field: "id", headerName: "ID", width: 200 },
        { field: "studentEnrollment", headerName: "Enrollment", width: 200 },
        { field: "studentName", headerName: "StudentName", width: 200 },
        { field: "facultyName", headerName: "FacultyName", width: 200 },
    ]

    const rows = converData(students);
    return (
        <div className="container my-8 mb-8" >
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
                    <div className='row'>
                        <div className="col-lg-5">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Add Subject</h1>
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
                                    <br />
                                    <div>
                                        <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="button" value="ViewAttendance" onClick={() => getStudents()} />
                                    </div>

                                    <hr />
                                </form>
                                <hr />
                            </div>
                        </div>

                        <div className="my-qr-text-card" >
                            <div className="text-center">
                                {/* <h1 className="h4 text-gray-900 mb-4">Attendace : {state}</h1> */}
                                {/* <h1 className="h4 text-gray-900 mb-4">Attendace : {students.length}</h1> */}
                            </div>
                            <form onSubmit={handleSubmit(sendMessage)}>
                                <div>
                                    <input type="text" {...register("message")} />
                                </div>
                                <div>
                                    <input type="submit" value="Send Message" />
                                </div>
                                <p>{counter}</p>
                            </form>
                            <button onClick={() => dispatch(totalAttendance({ attendance: 1 }))}>Attend</button>
                            <div>
                                <div>
                                    {/* <h1>Attendance : {counter}</h1> */}
                                </div>
                                <center>
                                    {value && (
                                        <QRCode1
                                            // title="GeeksForGeeks"
                                            value={value}
                                            bgColor={back}
                                            fgColor={fore}
                                            size={size === '' ? 0 : size}
                                        />
                                    )}
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DataGrid columns={columns} rows={rows} getRowId={(row) => row.studentEnrollment}>

            </DataGrid>
        </div>

    )
}
