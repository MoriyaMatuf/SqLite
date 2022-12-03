import {createSlice} from '@reduxjs/toolkit'

const data = createSlice({
 name:'number', 
 initialState:{
    number:0
 },reducers:{
   push:(state,action)=>{
   state.number=action.payload;
    }

 }

});

export const {push} = data.actions;
export default data.reducer;