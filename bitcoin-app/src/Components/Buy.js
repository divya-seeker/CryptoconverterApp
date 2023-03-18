import React from 'react'
import CreateNote from "./AddNote/CreateNote"
import ListNotes from "./AddNote/ListNotes"
import "./notes.css"

function buy() {
  return (
    <>
    <div className='note'>
      <div>
       <CreateNote ></CreateNote>
       <ListNotes></ListNotes>
       </div>
    </div>
    </>
  )
}

export default buy