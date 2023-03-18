import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        products:[],
    },
    reducers:{
        loadProducts:(state,action)=>{
            state.products=action.payload
        }
    }
})
export default cartSlice.reducer;
export const {loadProducts,addProduct,subtractProduct} = cartSlice.actions;