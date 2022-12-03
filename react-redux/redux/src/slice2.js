import {createSlice} from '@reduxjs/toolkit'

const data2 = createSlice({
 name:'number2', 
 initialState:{
  number:0
 },reducers:{
   push:(state,action)=>{
   state.number=action.payload;
    }

 }

});

export const {push} = data2.actions;
export default data2.reducer;