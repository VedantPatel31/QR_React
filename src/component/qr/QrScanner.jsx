import axios from 'axios'
import { Html5QrcodeScanner } from 'html5-qrcode'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { totalAttendance } from '../redux/AttendanceSlice'
import io from 'socket.io-client';

export const QrScanner = () => {
    const [result, setresult] = useState()
    const [userId, setuserId] = useState(localStorage.getItem("userId"))
    const [resData, setresData] = useState("")
    const [resMessage, setresMessage] = useState()
    const dispatch = useDispatch();
    const count = 1;
    const [counter, setcounter] = useState(0)

    const socket = io("https://nodebachend.onrender.com");
    const markAttendance = async (data) => {
        try {
            if (userId) {
                setuserId(localStorage.getItem("userId"));
                // dispatch(totalAttendance({ attendance: 1 }))
                const data2 = {
                    id: userId,
                    qrText: data
                }

                const res = await axios.post("/attendance/add/", data2);
                if (res.data.message == "attendance fill successfully") {
                    console.log("hello");
                    socket.emit("attendance-count", count);
                }
                // socket.emit("attendance-count", count);

                console.log("h: ", res.data.data);
                setresData(res.data.data);
                setresMessage(res.data.message);
            }
        } catch (error) {
        }
    }
    useEffect(() => {
        socket.on("attendance-count", (data) => {
            console.log("data : ", data);
            setcounter(data)
            console.log("count : ", counter);
        })
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250
            },
            fps: 10
        })
        scanner.render(success, error)
        setuserId(localStorage.getItem("userId"));
        function success(data) {
           
            console.log(data)
            scanner.clear()
            setresult(data);
            setuserId(localStorage.getItem("userId"));
            markAttendance(data)
        }
        function error(error) {

            console.log(error)
        }

    }, [])

    return (
        <div className="container">
            <div className='my-card'>
                <h1>QR SCANNER</h1>
                <p>count : {counter}</p>
                <div id="reader">
                    {result && <h1> Hey Student! {resData} {resMessage}</h1>}
                    {/* {result && <h1> {result} success {res} {res.message} {res.data}</h1>} */}
                </div>
            </div>
        </div>
    )
}