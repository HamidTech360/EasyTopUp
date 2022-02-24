import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import useReducecr from './user'
import adminReducer from './admin'

const store = configureStore({
    reducer:{
        user:useReducecr,
        admin:adminReducer
    },
    middleware:[...getDefaultMiddleware()]
})

export default store;
