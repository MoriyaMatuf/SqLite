import React, { useState } from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {push} from './slice';
export default function Item2()
{
    const x=useSelector(state=>state.reducerNumber2.number);
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