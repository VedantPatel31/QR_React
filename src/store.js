import { configureStore } from "@reduxjs/toolkit";
import AttendanceSlice from "./component/redux/AttendanceSlice";

export const store = configureStore({
    reducer:{
        atten : AttendanceSlice
    }
})