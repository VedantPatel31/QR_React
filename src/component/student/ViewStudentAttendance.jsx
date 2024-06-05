import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const ViewStudentAttendance = (props) => {
    const [studentAttendance, setstudentAttendance] = useState([])
    const [subjects, setsubjects] = useState([]);
    const { register, handleSubmit } = useForm();
    const [isDisable, setisDisable] = useState(false);

    // console.log(studentAttendance);
    // const [studentId, setstudentId] = useState(localStorage.getItem("userId"))
    const [isLoading, setisLoading] = useState(false)
    const subjectArray = studentAttendance?.map((stu) => {
        // console.log("sub : ",stu.subject.subjectName); 
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
        const res = await axios.post("/attendance/getAll",{sId:sId});
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
        const res = await axios.post("/attendance/getSubjectWise",data1);
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
            <div className='flex'>
                <div className='my-qr-text-card'>
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Select Subject</h1>
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
                    <div className="">
                        <input className="btn btn-primary btn-user btn-block" onClick={getAttendance} disabled={isDisable} type="submit" value="Show All" />
                    </div>
                </div >
                <div className='my-qr-text-card'>
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Attendance Status</h1>
                        <h1 className='h4 text-gray-00'>Total Attendance : {subjects.length}</h1>
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
            <table className='table table-bordered h4 text-gray-900'>
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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewStudentAttendance
