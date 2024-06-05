// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form';

// const ViewStudent = () => {
//     const [branches, setbranches] = useState([]);
//     const [semisters, setsemisters] = useState([])
//     const { register, handleSubmit } = useForm();
//     const [isDisable, setisDisable] = useState(false);
//     const [isLoading, setisLoading] = useState(false);
//     const [students, setstudents] = useState([])
//     useEffect(() => {
//         getBranches();
//         getSem();
//     }, [])
//     const submitHandler = async (data) => {
//         setisDisable(true);
//         setisLoading(true);
//         setstudents([]);
//         console.log("d=>", data);
//         if (data) {
//             // const res = await axios.post('https://nodebachend.onrender.com/student/view', data);
//             const res = await axios.post("http://localhost:3001/student/view", data);
//             setisLoading(false);
//             setisDisable(false);
//             setstudents(res.data.data);
//             console.log(res.data);
//         }
//     }
//     const getBranches = async () => {
//         // const res = await axios.get("https://nodebachend.onrender.com/branch/getALl")
//         const res = await axios.get("http://localhost:3001/branch/getALl");
//         setbranches(res.data.data);
//         console.log(res.data.data);
//     }
//     const getSem = async () => {
//         // const res = await axios.get("https://nodebachend.onrender.com/sem/getALl")
//         const res = await axios.get("http://localhost:3001/sem/getALl");
//         setsemisters(res.data.data);
//         console.log(res.data.data);
//     }
//     return (
//         <div>
//             {
//                 isLoading && (
//                     <div className="spinner-border" role="status">
//                         <span className="sr-only"></span>
//                     </div>
//                 )
//             }
//             <div className='my-qr-text-card'>
//                 <div className="text-center">
//                     <h1 className="h4 text-gray-900 mb-4">View Students</h1>
//                 </div>
// <form className="user" onSubmit={handleSubmit(submitHandler)}>
//     <div className="form-group row">
//         <div className="col-sm-6 mb-3 mb-sm-0">
//             <select className="form-control" aria-label="Default select example" {...register("branch")}>
//                 <option selected >Select Field</option>
//                 {
//                     branches?.map((branch) => {
//                         return <option value={branch._id} >{branch.branchName}</option>
//                     })
//                 }
//             </select>
//         </div>
//         <div className="col-sm-6">
//             <select className="form-control " aria-label="Default select example" {...register("sem")}>
//                 <option selected>Select Semister</option>
//                 {
//                     semisters?.map((sem) => {
//                         return <option value={sem._id} >{sem.title}</option>
//                     })
//                 }
//             </select>
//         </div>
//     </div>
//     <div>
//         <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="submit" />
//     </div>
//     <hr />
// </form>
//             </div >
// <table className='table table-bordered h4 text-gray-900'>
//     <thead>
//         <tr>
//             <th scope='col'>First Name</th>
//             <th scope='col'>Last Name</th>
//             <th scope='col'>Enrollment Number</th>
//             <th scope='col'>Email</th>
//             <th scope='col'>Mobile No</th>
//             <th scope='col'>branch</th>
//             <th scope='col'>Sem</th>
//         </tr>
//     </thead>
//     <tbody>

//         {
//             students?.map((stu) => {
//                 return (
//                     <tr>
//                         <td>{stu.firstName}</td>
//                         <td>{stu.lastName}</td>
//                         <td>{stu.enrollmentNumber}</td>
//                         <td>{stu.email}</td>
//                         <td>{stu.mobileNo}</td>
//                         <td>{stu.branch.branchName}</td>
//                         <td>{stu.sem.title}</td>
//                     </tr>
//                 )
//             })
//         }
//     </tbody>
// </table>
//         </div>
//     )
// }

// export default ViewStudent



import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const ViewStudent = () => {
    const [branches, setbranches] = useState([]);
    const [semisters, setsemisters] = useState([])
    const { register, handleSubmit } = useForm();
    const [isDisable, setisDisable] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [students, setstudents] = useState([])
    useEffect(() => {
        getBranches();
        getSem();
    }, [])
    const submitHandler = async (data) => {
        setisDisable(true);
        setisLoading(true);
        setstudents([]);
        console.log("d=>", data);
        if (data) {
            const res = await axios.post('/student/view', data);
            setisLoading(false);
            setisDisable(false);
            setstudents(res.data.data);
            console.log(res.data);
        }
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
    const convertData = (student) => {
        return students.map((stu) => ({
            // id: stu._id, // assuming each studentAttendance item has an id
            firstName: stu.firstName,
            lastName: stu.lastName,
            enrollmentNumber: stu.enrollmentNumber,
            branchName: stu.branch.branchName,
            semTitle: stu.sem.title,
            email: stu.email,
            mobileNo: stu.mobileNo,
        }));
    };
    const columns = [
        // { field: "id", headerName: "ID", width: 200 },
        { field: "enrollmentNumber", headerName: "Enrollment Number", width: 200 },
        { field: "firstName", headerName: "First Name", width: 200 },
        { field: "lastName", headerName: "Last Name", width: 200 },
        { field: "branchName", headerName: "Branch", width: 200 },
        { field: "semTitle", headerName: "Sem", width: 200 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "mobileNo", headerName: "Mobile NO.", width: 200 },  
    ]
    const rows = convertData(students);

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
                <h1 className="h3 mb-0 text-gray-800">View</h1>
            </div>
            <div className="card p-5 o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="col-lg">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Add Subject</h1>
                            </div>
                            <form className="user" onSubmit={handleSubmit(submitHandler)}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <select className="form-control" aria-label="Default select example" {...register("branch")}>
                                            <option selected >Select Field</option>
                                            {
                                                branches?.map((branch) => {
                                                    return <option value={branch._id} >{branch.branchName}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <select className="form-control " aria-label="Default select example" {...register("sem")}>
                                            <option selected>Select Semister</option>
                                            {
                                                semisters?.map((sem) => {
                                                    return <option value={sem._id} >{sem.title}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <input className="btn btn-primary btn-user btn-block" disabled={isDisable} type="submit" value="submit" />
                                </div>
                                <hr />
                            </form>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:500 , width:"100%"}}>
                <DataGrid
                    rows={rows} 
                    columns={columns}
                    getRowId={(row)=>row.enrollmentNumber}
                    initialState={{
                        pagination:{paginationModel:{pageSize:5}}
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
                        <th scope='col'>Email</th>
                        <th scope='col'>Mobile No</th>
                        <th scope='col'>branch</th>
                        <th scope='col'>Sem</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        students?.map((stu) => {
                            return (
                                <tr>
                                    <td>{stu.firstName}</td>
                                    <td>{stu.lastName}</td>
                                    <td>{stu.enrollmentNumber}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.mobileNo}</td>
                                    <td>{stu.branch.branchName}</td>
                                    <td>{stu.sem.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default ViewStudent

