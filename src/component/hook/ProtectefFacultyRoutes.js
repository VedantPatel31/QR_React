import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import LoginFaculty from '../faculty/FacultyLogin'
import QRCode from '../qr/QRCode';


const useAuth = () => {
    const [isAuth, setisAuth] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setisAuth(true);
        }
    }, []);
    return isAuth;
}
const ProtectedFacultyRoutes = () => {
    const auth = useAuth();
    // return auth == true?<Outlet/>:<LoginUser/>;
    return auth == true ? <Outlet /> : <LoginFaculty />;

}
export default ProtectedFacultyRoutes;
