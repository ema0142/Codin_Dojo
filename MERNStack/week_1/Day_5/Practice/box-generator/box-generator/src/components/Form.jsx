import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    // const {setcolor} = props
    const [add,setAdd] = useState('');
    const actionHandler = (e)=>{
        e.preventDefault();
        props.setColor([...props.color,add])
    }
  return (
    <div>
        <form onSubmit={actionHandler}>
        <label>color</label><input type="color" value={add} onChange={(e)=>setAdd(e.target.value)}/>
        <button>add</button>
    
    </form>
    </div>
  )
}

export default Form