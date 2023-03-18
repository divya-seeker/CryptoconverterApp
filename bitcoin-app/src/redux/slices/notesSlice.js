import {createSlice} from "@reduxjs/toolkit"

const sliceNote=createSlice({
    name:'noteSlice',
    initialState:{
        note:[]
    },
    reducers:{
        createNote:(state,action)=>{
            state.note.push(action.payload);
        },
        deleteNote:(state,action)=>{
            state.note=state.note.filter(ele=> ele.id!==action.payload )
        }
    }
})
export default sliceNote.reducer;
export const {createNote,deleteNote} = sliceNote.actions;