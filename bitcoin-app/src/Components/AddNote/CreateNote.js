import React,{useState} from 'react'
import {useDispatch} from "react-redux"
// import { nanoid } from '@reduxjs/toolkit';
import { createNote } from '../../redux/slices/notesSlice';
import './createNote.css'
import { Button } from 'antd';
 


function CreateNote() {
    const [inputTitle,setInputTitle]=useState();
    const [inputText,setInputText]=useState();

    const dispatch=useDispatch()

    function handleSubmit(event){
        event.preventDefault()
        dispatch(createNote({
            inputTitle,
            inputText,
            id:new Date().getTime().toString()
        }))
    }
    // const styling={
    //     display:'block',
    //     border:'3px solid #d2691e',
    //     marginTop:'6px',
    //     backgroundColor:'#ffefd5',
    //     verticalAlign:"center"
    // }
    return (
    <div>
    <form onSubmit={handleSubmit} >
     <div>
        <div className='but'>
            <label htmlFor="title">Title :<span>  </span></label>
            <input id="title" type="text" placeholder='Enter the Title' onChange={(e)=>setInputTitle(e.target.value)}/>
        </div>
        <div className='textarea'>
            <label htmlFor="notes" style={{verticalAlign:"center"}}>Enter Text :<span>  </span> </label>
            <textArea style={{height:'120px'}}  name="notes" id="notes" cols="30" rows="10" placeholder='Enter your Text✍️' onChange={(e)=>setInputText(e.target.value)}></textArea>
        </div>
        <div className='but'>
            <button type='submit' onSubmit={handleSubmit}><Button className='butt' type='primary' onSubmit={handleSubmit}>Submit</Button></button>
        </div>
     </div>
    </form>
    </div>
  )
}

export default CreateNote