import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import LoginUser from '../student/StudentLogin'
import { QrScanner } from '../qr/QrScanner';


const useAuth = ()=>{
    const [isAuth, setisAuth] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setisAuth(true);
        }
    },[]);
    return isAuth;
}
const ProtectedRoutes = ()=>{
    const auth = useAuth();
    // return auth == true?<Outlet/>:<LoginUser/>;
    return auth == true?<QrScanner/>:<LoginUser/>;

}
export default ProtectedRoutes;
