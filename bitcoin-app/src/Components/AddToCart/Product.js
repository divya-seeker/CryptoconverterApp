import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadProducts } from '../../redux/slices/cartSlice';

import { nanoid } from '@reduxjs/toolkit';

import SingleProduct from './SingleProduct';
import './Product.css'

function Product() {

  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

  const dispatch =useDispatch();
  const product=useSelector(state=>state.cartReducer.products);
  async function fetchData(){
    const response= await fetch(apiUrl)
    const jsonData=await response.json()

    const data = jsonData.rates;
        const tempArray = Object.entries(data).map((item) => {
            return {
                value: item[1].name,
                label: item[1].name,
                rate: item[1].value,
                id:nanoid(10),
            };
        });
    dispatch(loadProducts(tempArray))
  }
  
  useEffect(()=>{
    fetchData()
  },[])


  
    return (
      <div style={{border:'solid 5px #E5AA70',marginTop:'60px'}} className="cartStyle">
        
        {product.map((item)=>{return(
    
          <SingleProduct key={item.id} item={item}/>
    
      )})}
      </div>
    )
}

export default Product