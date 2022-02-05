import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import useReducecr from './user'

const store = configureStore({
    reducer:{
        user:useReducecr
    },
    middleware:[...getDefaultMiddleware()]
})

export default store;
