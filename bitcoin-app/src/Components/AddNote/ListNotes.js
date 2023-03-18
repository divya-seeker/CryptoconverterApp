import React from 'react'
import { useSelector } from 'react-redux'
import { deleteNote } from '../../redux/slices/notesSlice';
import { useDispatch } from 'react-redux';

function ListNotes() {
  const notes=useSelector(state=>state.notesReducer.note); 
  const dispatch=useDispatch();
  return (
    <div>
    {notes.map(note=>{
        return(
            <>
            <div style={{borderRadius:'4px',width:'80%',marginInline:'auto',backgroundColor:'#ffebcd ',marginTop:'7px',marginBottom:'7px',paddingTop:'10px',paddingInline:'12px',paddingBottom:'15px'}} >
            <div><span style={{fontSize:'2rem',color:'#3d0c02'}}> Title: </span><span style={{color:'#8b4513',fontSize:'1.8rem'}}>{ note.inputTitle }</span></div>
            <div><span style={{fontSize:'2rem',color:'#3d0c02'}}>Description:</span><span style={{color:'#8b4513',fontSize:'1.2rem'}}>{ note.inputText }</span></div>
            <div style={{fontSize:'1rem',color:'#3d0c02'}} key={notes.id}>{ note.id }</div>
            <div style={{position:'relative'}}>
            <div style={{position:'absolute',right:'0',bottom:'0px'}}>
              <button onClick={()=>{dispatch(deleteNote(note.id))}}>
              <i className="fa fa-2x fa-solid fa-trash-can" aria-hidden="true">
              </i>
              </button>
            </div>
            </div>
            </div>
            </>
        )
    })}
    </div>
  )
}

export default ListNotes