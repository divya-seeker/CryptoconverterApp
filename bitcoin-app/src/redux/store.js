import {configureStore} from '@reduxjs/toolkit'
import notesReducer from  "./slices/notesSlice"
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice"

export default configureStore({
    reducer:{notesReducer,cartReducer,productReducer}
})