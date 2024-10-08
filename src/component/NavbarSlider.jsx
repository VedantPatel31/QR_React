import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StudentRegister from './student/StudentRegister'
import FacultyRegister from './faculty/FacultyRegister'
import Branch from './branch_sem_sub/Branch'
import Sem from './branch_sem_sub/Sem'
import Subject from './branch_sem_sub/Subject'
import QRCode from './qr/QRCode'
import { QrScanner } from './qr/QrScanner'
import ViewStudent from './student/ViewStudent'
import ViewFaculty from './faculty/ViewFaculty'
import ViewStudentAttendance from './student/ViewStudentAttendance'
import StudentLogin from './student/StudentLogin'
import FacultyLogin from './faculty/FacultyLogin'
import SubjectDemo from './branch_sem_sub/SubjectDemo'
import QRDemo from './qr/QRDemo'
import ViewAtt from './student/ViewAtt'
import { Helmet } from 'react-helmet'

export default function NavbarSlider(props) {
    return (
        <>
            <Helmet>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="js/sb-admin-2.min.js"></script>
            </Helmet>
            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Sidebar */}
                <ul
                    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    {/* Sidebar - Brand */}
                    <a
                        className="sidebar-brand d-flex align-items-center justify-content-center"
                        href="index.html"
                    >
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">
                            QR Attendance 
                        </div>
                    </a>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">Interface</div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                        >
                            <i className="fas fa-fw fa-cog" />
                            <span>Registers</span>
                        </a>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Components:</h6>
                                <Link className='collapse-item' to="studentRegister">Student Register</Link>
                                <Link className='collapse-item' to="facultyRegister">Faculty Register</Link>
                            </div>
                        </div>
                    </li>
                    {/* Nav Item - Utilities Collapse Menu */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseUtilities"
                            aria-expanded="true"
                            aria-controls="collapseUtilities"
                        >
                            <i className="fas fa-fw fa-wrench" />
                            <span>Components</span>
                        </a>
                        <div
                            id="collapseUtilities"
                            className="collapse"
                            aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <Link className='collapse-item' to="branch">Add Branch</Link>
                                <Link className='collapse-item' to="sem">Add Semister</Link>
                                <Link className='collapse-item' to="subject">Add Subject</Link>
                                <Link className='collapse-item' to="qrCode1">Generate QR</Link>
                            </div>
                        </div>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">Addons</div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapsePages"
                            aria-expanded="true"
                            aria-controls="collapsePages"
                        >
                            <i className="fas fa-fw fa-folder" />
                            <span>User</span>
                        </a>
                        <div
                            id="collapsePages"
                            className="collapse"
                            aria-labelledby="headingPages"
                            data-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <Link className="collapse-item" to="studentLogin">Student Login</Link>
                                <Link className="collapse-item" to="facultyLogin">Faculty Login</Link>
                                <Link className="collapse-item" to="qrScanner">Scanner</Link>
                                <Link className="collapse-item" to="viewStudent">View Student</Link>
                                <Link className="collapse-item" to="viewFaculty">View Faculty</Link>
                                <Link className="collapse-item" to="viewStudentAttendance">View Student Attendace</Link>
                            </div>
                        </div>
                    </li>
                    {/* Nav Item - Charts */}
                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-chart-area" />
                            <span>Charts</span>
                        </a>
                    </li>
                    {/* Nav Item - Tables */}
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table" />
                            <span>Tables</span>
                        </a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />
                    {/* Sidebar Toggler (Sidebar) */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" />
                    </div>
                    {/* Sidebar Message */}
                    
                </ul>
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <button
                                id="sidebarToggleTop"
                                className="btn btn-link d-md-none rounded-circle mr-3"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            {/* Topbar Search */}
                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control bg-light border-0 small"
                                        placeholder="Search for..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="searchDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-search fa-fw" />
                                    </a>
                                    {/* Dropdown - Messages */}
                                    <div
                                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown"
                                    >
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-0 small"
                                                    placeholder="Search for..."
                                                    aria-label="Search"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                              
                                <div className="topbar-divider d-none d-sm-block" />
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                            Vedant Patel
                                        </span>
                                        <img
                                            className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <Routes>
                                <Route path='studentRegister' element={<StudentRegister title="Student Registration" />}></Route>
                                <Route path='facultyRegister' element={<FacultyRegister title="Faculty Registration" />}></Route>
                                <Route path='/studentLogin' element={<StudentLogin />}></Route>
                                <Route path='/facultyLogin' element={<FacultyLogin />}></Route>
                                <Route path='/branch' element={<Branch title="Branches" />}></Route>
                                <Route path='/sem' element={<Sem title="Semisters" />}></Route>
                                {/* <Route path='/subject' element={<Subject title="Subjects" />}></Route> */}
                                <Route path='/subject' element={<SubjectDemo title="Subjects" />}></Route>
                                {/* <Route path='/qrCode1' element={<QRCode title="Generating QR" />}></Route> */}
                                <Route path='/qrCode1' element={<QRDemo title="Generating QR" />}></Route>
                                <Route path='/qrScanner' element={<QrScanner title="QR Scanner" />}></Route>
                                <Route path='/viewStudent' element={<ViewStudent />}></Route>
                                <Route path='/viewFaculty' element={<ViewFaculty />}></Route>
                                {/* <Route path='/viewStudentAttendance' element={<ViewStudentAttendance />}></Route> */}
                                <Route path='/viewStudentAttendance' element={<ViewAtt />}></Route>
                            </Routes>
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Logout Modal*/}
            <div
                className="modal fade"
                id="logoutModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Ready to Leave?
                            </h5>
                            <button
                                className="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Select "Logout" below if you are ready to end your current session.
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <a className="btn btn-primary" href="login.html">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
