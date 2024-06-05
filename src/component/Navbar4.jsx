import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar4(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/studentRegister">Student Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/studentLogin">Student Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/facultyRegister">Faculty Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/facultyLogin">Faculty Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/branch">Branch</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sem">Semister</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/subject">Subject</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/qrCode1">QR Generate</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/qrScanner">Scanner</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/viewStudent">View Student</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/viewStudentAttendance">View Student Attendace</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vali">validation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/subjectDemo">Subject Demo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
