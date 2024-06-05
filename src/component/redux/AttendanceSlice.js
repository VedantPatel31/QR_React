import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    attendance : 0,
}
const AttendanceSlice = createSlice({
    name : "atten",
    initialState,
    reducers:{
        totalAttendance : (state,action)=>{
            console.log("sa : ",state);
            console.log("a : ",action);
            state.attendance += action.payload.attendance 
            console.log("atte : ",state.attendance);
            console.log("action : ",action.payload.attendance);

        }
    }
})

export const {totalAttendance} = AttendanceSlice.actions
export default AttendanceSlice.reducer