import {createSlice} from '@reduxjs/toolkit'

export const adminSlice = createSlice({
   name:'Admin',
   initialState:{
       admin:null
   },
   reducers:{
     auth: (state, action)=>{
        console.log('admin auth dispatched');
        state.admin = action.payload
        console.log('admin:', state.admin);
     }  
   } 
})

export const {auth} = adminSlice.actions
export default adminSlice.reducer