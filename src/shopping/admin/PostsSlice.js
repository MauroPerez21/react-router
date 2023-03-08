import {createSlice} from '@reduxjs/toolkit'
import reducer from './reducer'
//const initialState = {cart: []}
const postSlice = 
createSlice({
    name:'post',
    initialState:{
        post:[],
    },
    reducers:{
                add:{reducer},
                remove:{reducer},
                up:{reducer},
                down:{reducer},
                filter:{reducer}
                }
})
const postReducer = postSlice.reducer
export const {add, remove, up, down, filter} = postSlice.actions
export default postReducer