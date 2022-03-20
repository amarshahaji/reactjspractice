import React, { useState } from 'react';
// style using object
const btnClass = {
    marginRight:'1rem',
    color:'white', 
    backgroundColor: 'blue', 
    fontSize:'16px', 
    width: '8rem', 
    height: '2rem'
}
export default function UseStateHook(){
    const[count, setCount] = useState(0);

    return(<div>
        <button  onClick={()=> setCount(count - 1)} style={btnClass}>
            -
        </button>
        {count}
        {/* inline style for html element */}
        <button onClick={()=> setCount(count + 1)} style={{marginLeft:'1rem',color:'white', backgroundColor: 'blue', fontSize:'16px', width: '8rem', height: '2rem'}}>
            +
        </button>
    </div>)
}