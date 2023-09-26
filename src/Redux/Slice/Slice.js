import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {name:'Sachin' ,age: 30,course: "Mern" , batch:'Ea24'},
    {name:'Dhoni' ,age: 28,course: "Mean" , batch:'Ea245'},
    {name:'Rohit' ,age: 335,course: "Cricket" , batch:'Ea26'},
    {name:'Sahil' ,age: 23,course: "Football" , batch:'Ea27'},
    {name:'Prince' ,age: 20,course: "Java" , batch:'Ea28'},
]

const StudentSlice = createSlice({
    name:"Stu_Data",
    initialState,
    reducers: {
        editStudent : (state , action) => {
            state[action.payload.index] = action.payload.info;
           

        },

        addStudent : (state , action) => {
            state.push(action.payload)
        },

    }
})

export const {editStudent, addStudent} = StudentSlice.actions;
export default StudentSlice.reducer