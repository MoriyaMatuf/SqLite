import React, { useState } from 'react';
export default function Item()
{

let typez:string="";

 const [list,setlist]=useState<string[]>([]);
return <input type="text" onChange={(x)=>{typez=x.target.value}} />
{ 



}
<button onClick={()=>{
setlist([...list,typez]);
}}>add</button>
{
    list.map((x)=>{
        <ul>
            <li>{x}</li>
        </ul>
    })
}


}
