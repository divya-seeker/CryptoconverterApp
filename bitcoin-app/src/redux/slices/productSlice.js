import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const proSlice=createSlice(
    {
        name:'cart',
        initialState:{
            cart:[]
        },
        reducers:{
            addToCart:(state,action)=>{
                const currItem=state.cart.find((item)=>item.id==action.payload)
                if(currItem){
                    currItem.quantity=currItem.quantity+1;
                    return;
                }
                state.cart.push({
                    quantity:1,
                    id:action.payload
                })
            },
            substractFromCart:(state,action)=>{
                const currItem=state.cart.find((item)=>item.id==action.payload)
                if(currItem){
                    currItem.quantity=currItem.quantity-1;
                    if(currItem.quantity==0){
                        state.cart=state.cart.filter(item=>item.id!==action.payload)
                    }
                    return;
                }

            }
        }
    }
)

export default proSlice.reducer
export const {addToCart,substractFromCart} = proSlice.actions