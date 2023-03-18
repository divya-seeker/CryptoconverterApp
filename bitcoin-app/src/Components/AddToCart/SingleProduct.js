import React from 'react'
import {substractFromCart,addToCart} from '../../redux/slices/productSlice';
import { Card } from 'antd';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import './Product.css'

function SingleProduct({item}) {
  const cartt=useSelector(state=>state.productReducer.cart)
  const currItem=cartt.find(itemm=>itemm.id==item.id)
  const currQuantity=currItem?currItem.quantity:0;
  const dispatch =useDispatch();

  return (
        <>
        <div className="site-card-border-less-wrapper">
            <div><Card
              title={item.value}
              bordered={false}
              style={{
                width: 300,
                border:'2px #686868 solid',
                boxShadow: '1.3px 3px 7px 1px #834333'
              }}
            >
            <div className='ton'>
            <button onClick={()=>dispatch(substractFromCart(item.id))} className='but' style={{backgroundColor:'#f88379'}}><AiOutlineMinus/></button>
            <p>{currQuantity}</p>
            <button onClick={()=>dispatch(addToCart(item.id))}  className='but' style={{backgroundColor:'#8db600'}}><AiOutlinePlus/></button>
            </div>
            </Card>
            
            </div>
        </div>
        </>
        
  )
}

export default SingleProduct