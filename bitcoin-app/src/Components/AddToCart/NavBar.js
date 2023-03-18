import React from 'react'
import {BsCart} from 'react-icons/bs'
import './NavBar.css'
import { useSelector } from 'react-redux'

function NavBar() {
  const products=useSelector(state=>state.productReducer.cart)
  // const totalproducts=products.reduce((partialSum, a) => partialSum + a.quantity, 0);
  let count=0
  products.forEach(ele=>count=count+ele.quantity)
  return (
  <>
    <div className='box'>
      <div className='purchase'><h1>Purchase</h1></div>
      <div className='cart'><div style={{paddingTop:'5px'}}><BsCart/></div><h3>{count}</h3></div>
    </div>
  </>
  )
}

export default NavBar