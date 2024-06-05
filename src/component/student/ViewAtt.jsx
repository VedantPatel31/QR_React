import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const ViewAtt = (props) => {
    const [studentAttendance, setstudentAttendance] = useState([])
    const [subjects, setsubjects] = useState([]);
    const { register, handleSubmit } = useForm();
    const [isDisable, setisDisable] = useState(false);

    // console.log(studentAttendance);
    // const [studentId, setstudentId] = useState(localStorage.getItem("userId"))
    var count = 0;
    const [isLoading, setisLoading] = useState(false)
    const subjectArray = studentAttendance?.map((stu) => {
        // console.log("sub : ",stu.subject.subjectName); 
        count = count + 1;
        return (stu.subject.subjectName)
    })
    const subjectArray1 = subjects?.map((sub) => {
        // console.log("sub : ",stu.subject.subjectName); 
        return (sub.subjectName)
    })
    console.log("sub1 : ", subjectArray);
    console.log("sub2 : ", subjectArray1);

    const countOfSubjectWiseAttenadnce = {};

    subjectArray1.forEach(element => {
        countOfSubjectWiseAttenadnce[element] = 0;
    });
    subjectArray.forEach(element => {
        if (element !== undefined) {
            countOfSubjectWiseAttenadnce[element] = (countOfSubjectWiseAttenadnce[element] || 0) + 1;
        }
    });



    useEffect(() => {
        getAttendance();
        getSubject();
    }, [])

    const getAttendance = async () => {
        setisLoading(true);
        // console.log(studentId);
        const sId = localStorage.getItem("userId");
        // console.log(sId);
        const res = await axios.post("/attendance/getAll", { sId: sId });
        setstudentAttendance(res.data.data);
        // console.log("res data : ", res.data.data);
        setisLoading(false);
    }

    const submitHandler = async (data) => {
        setisLoading(true);
        setisDisable(true);
        const data1 = {
            sId: localStorage.getItem("userId"),
            subjectId: data
        }
        const res = await axios.post("/attendance/getSubjectWise", data1);
        setstudentAttendance(res.data.data);
        // console.log("res data : ", res.data.data);
        setisLoading(false);
        setisDisable(false);
    }
    const getSubject = async () => {
        const res = await axios.get("/subject/getALl")
        setsubjects(res.data.data);
        // console.log(res.data.data);
    }
    const convertData = (studentAttendance) => {
        return studentAttendance.map((stu) => ({
            id: stu._id, // assuming each studentAttendance item has an id
            firstName: stu.studentId.firstName,
            lastName: stu.studentId.lastName,
            enrollmentNumber: stu.studentId.enrollmentNumber,
            branchName: stu.branch.branchName,
            semTitle: stu.sem.title,
            subjectName: stu.subject.subjectName,
            facultyName: stu.facultyId.firstName,
            attendanceStatus: stu.attendanceStatus,
            dateStatus: stu.dateStatus,
        }));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 200 },
        { field: "enrollmentNumber", headerName: "Enrollment Number", width: 200 },
        { field: "firstName", headerName: "First Name", width: 200 },
        { field: "lastName", headerName: "Last Name", width: 200 },
        { field: "branchName", headerName: "Branch", width: 200 },
        { field: "semTitle", headerName: "Sem", width: 200 },
        { field: "subjectName", headerName: "Subject", width: 200 },
        { field: "facultyName", headerName: "Faculty", width: 200 },
        { field: "attendanceStatus", headerName: "Attendance Status", width: 200 },
        { field: "dateStatus", headerName: "Date", width: 200 },
    ]
    const rows = convertData(studentAttendance);

    return (
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
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className='row'>
                        <div className="col-lg-5">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Add Subject</h1>
                                </div>
                                <form className="user" onSubmit={handleSubmit(submitHandler)}>
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
                                        <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="Search" />
                                    </div>
                                    <hr />
                                </form>
                                {/* <hr /> */}
                                <div className="">
                                    <input className="btn btn-primary btn-user btn-block" onClick={getAttendance} disabled={isDisable} type="submit" value="Show All" />
                                </div>
                            </div>
                        </div>

                        <div className='m-2 my-5'>
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Attendance Status</h1>
                                <h1 className='h4 text-gray-00'>Total Attendance : {count}</h1>
                            </div>
                            <table className='my-3 table table-bordered h4 text-gray-900'>
                                <thead>
                                    <tr>
                                        {Object.keys(countOfSubjectWiseAttenadnce).map(key => (
                                            <th key={key}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {Object.keys(countOfSubjectWiseAttenadnce).map(key => (
                                            <td key={key}>{countOfSubjectWiseAttenadnce[key]}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    getRowId={(row)=>row.id}
                    initialState={{
                        pagination:{paginationModel : {pageSize : 5}}
                    }}
                    pageSizeOptions={[5,10,15,20]}
                >
                </DataGrid>
            </div>
            {/* <table className='table table-bordered h4 text-gray-900'>
                <thead>
                    <tr>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Enrollment Number</th>
                        <th scope='col'>branch</th>
                        <th scope='col'>Sem</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Faculty</th>
                        <th scope='col'>Attendance Status</th>
                        <th scope='col'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentAttendance?.map((stu) => {
                            return (
                                <tr>
                                    <td>{stu.studentId.firstName}</td>
                                    <td>{stu.studentId.lastName}</td>
                                    <td>{stu.studentId.enrollmentNumber}</td>
                                    <td>{stu.branch.branchName}</td>
                                    <td>{stu.sem.title}</td>
                                    <td>{stu.subject.subjectName}</td>
                                    <td>{stu.facultyId.firstName}</td>
                                    <td>{stu.attendanceStatus}</td>
                                    <td>{stu.dateStatus}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </div>

    )
}

export default ViewAtt