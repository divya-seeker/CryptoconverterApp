import React from 'react'
import divya from './divvya.jpg'
import './about.css'

function About() {
  return (
    <>
    <div className="abt">
      <img style={{height:'550px',marginTop: '0px'}} src={divya} alt="NA"  />
      <p className='par' style={{marginTop: '0px'}}><strong>Founder</strong><i> </i>
      of Crypo-converter,<i>Mr. Divya Dwivedi</i> in year 2023, who was the student of Motilal Nehru National Institute of Technology,Allahabad (MNNIT).
      This website was designed by him to help the people to convert different type of cryptocurrency into each other.
      Various cryptocurrency like Bitcoin,Binance,Ether, etc. are included.In further updates additional features like Bitcoin to actual currency conversion and 
      other facilities will added.</p>
    </div>
    </>
  )
}

export default About