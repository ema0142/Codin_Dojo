import React from 'react'

const Box = ({color}) => {
  return (
    <div> <h1>hello emna</h1>
        {color.map((element,idx)=>(
            <div key={idx} style={{backgroundColor:element , width:"100px" , height:"100px"}}></div>
        ))}
    
    </div>
  )
}

export default Box