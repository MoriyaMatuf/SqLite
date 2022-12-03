import React, { useState } from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {push} from './slice2';
export default function Item()
{
const x=useSelector(state=>state.reducerNumber.number);
const [val,setval]=useState();
    const dispatch = useDispatch();
  return (
    <div>
        <p>{x}</p>
        <input onChange={(x)=>{setval(x.target.value)}}/>
        <button onClick={()=>{ dispatch(push(val));}}></button>
       
    </div>
  );
}


