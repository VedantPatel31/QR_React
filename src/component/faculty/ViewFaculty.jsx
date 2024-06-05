import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewFaculty = () => {
    const [isLoading, setisLoading] = useState(false);
    const [faculties, setfaculties] = useState([])

    useEffect(() => {
        getAllFaculty();
    }, [])

    const getAllFaculty = async () => {
        setisLoading(true);
        const res = await axios.get('/faculty/getAll');
        setisLoading(false);
        setfaculties(res.data.data);
        console.log(res.data);
    }
    const columns = [
        {field : "_id" , headerName : "ID" , width : 270},
        {field : "firstName" , headerName : "First Name" , width : 170},
        {field : "lastName" , headerName : "Last Name" , width : 170},
        {field : "email" , headerName : "Email" , width : 270},
    ]
    return (
        <div>
            {
                isLoading && (
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                )
            }
            <div className='my-qr-text-card'>
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">View Faculty</h1>
                </div>
            </div >
            <DataGrid
                rows={faculties} 
                columns={columns}
                getRowId={(row)=>row._id}
                initialState={{
                    pagination:{paginationModel:{pageSize:5}}
                }}
                pageSizeOptions={[5,10,15,20]}
            ></DataGrid>
            {/* <table className='table table-bordered h4 text-gray-900'>
                <thead>
                    <tr>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        faculties?.map((faculty) => {
                            return (
                                <tr>
                                    <td>{faculty.firstName}</td>
                                    <td>{faculty.lastName}</td>
                                    <td>{faculty.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default ViewFaculty
