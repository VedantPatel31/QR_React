
import './App.css';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import StudentRegister from './component/student/StudentRegister';
import StudentLogin from './component/student/StudentLogin';
import { QrScanner } from './component/qr/QrScanner';
import { QrCodeDemo } from './component/qr/QrCodeDemo';
import DrawerDemo from './component/mui/DrawerDemo';
import ProtectedRoutes from './component/hook/ProtectedRoutes';
import FacultyRegister from './component/faculty/FacultyRegister';
import Branch from './component/branch_sem_sub/Branch';
import Sem from './component/branch_sem_sub/Sem';
import FacultyLogin from './component/faculty/FacultyLogin';
import Subject from './component/branch_sem_sub/Subject';
import QRCode from './component/qr/QRCode';
import AdminDashBoard from './component/dashboard/AdminDashBoard';
import Register from './component/student/Register';
import Navbar3 from './component/Navbar3';
import SlideBar from './component/SlideBar';
import NavbarSlider from './component/NavbarSlider';
import Navbar4 from './component/Navbar4';
import ProtectedFacultyRoutes from './component/hook/ProtectefFacultyRoutes';
import ViewStudent from './component/student/ViewStudent';
import ViewStudentAttendance from './component/student/ViewStudentAttendance';
import DemoValidation from './component/mui/DemoValidation';
import SubjectDemo from './component/branch_sem_sub/SubjectDemo';
import axios from "axios";

function App() {
  // axios.defaults.baseURL = "https://nodebachend.onrender.com";
  axios.defaults.baseURL = "https://qr-node-stzo.onrender.com";
  // axios.defaults.baseURL = "http://localhost:3000";
  return (
    <div className="App">
      {/* {<Navbar title="QR Attendance System" />} */}
      {/* <Navbar2 title="Netflix"/> */}
      {/* <Navbar3/> */}
      {/* <SlideBar/> */}
      <NavbarSlider />
      {/* <AdminDashBoard/> */}

      {/* <DrawerDemo /> */}
      {/* <Navbar4 title="QR Attendance Project" /> */}
      <Routes>

        {/* <Route path='/subjectDemo' element={<SubjectDemo />}></Route> */}
        {/* <Route path='/studentRegister' element={<StudentRegister />}></Route>
        <Route path='/studentLogin' element={<StudentLogin />}></Route>
        <Route path='/facultyRegister' element={<FacultyRegister />}></Route>
        <Route path='/facultyLogin' element={<FacultyLogin />}></Route> */}
        {/* <Route element={<ProtectedRoutes />}> */}
        {/* <Route path='/qrScanner' element={<QrScanner />}></Route> */}

        {/* </Route> */}
        {/* <Route path='/viewStudentAttendance' element={<ViewStudentAttendance/>}></Route> */}
        {/* <Route element={<ProtectedFacultyRoutes />}> */}
        {/* <Route path='/qrCode1' element={<QRCode />}></Route> */}
        {/* <Route path='/branch' element={<Branch />}></Route> */}
        {/* <Route path='/sem' element={<Sem />}></Route> */}
        {/* <Route path='/subject' element={<Subject />}></Route> */}
        {/* </Route> */}
        {/* <Route path='/viewStudent' element={<ViewStudent/>}></Route> */}
        {/* <Route path="vali" element={<DemoValidation/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;


