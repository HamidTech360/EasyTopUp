import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null
    },
    reducers:{
        login:(state, action)=>{
            console.log('login dispatched');
            // alert('redux')
            state.user = action.payload
            // console.log(state.user);

        }
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer