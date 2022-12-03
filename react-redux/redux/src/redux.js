import { configureStore } from '@reduxjs/toolkit';
import data  from './slice.js';
import data2  from './slice2.js';


const store = configureStore({
    reducer:{
        reducerNumber:data,
        reducerNumber2:data2
    }
})

export default store;