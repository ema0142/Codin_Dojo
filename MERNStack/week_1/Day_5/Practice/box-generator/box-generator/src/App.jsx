import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Box from './components/box'

function App() {
  const [color,setColor] = useState([]);
  console.log(color);
  return (
    <>
      <Form setColor={setColor} color={color}/>
      <Box color={color} />
      {/* {color.map((element,idx)=>(
        console.log(element),
        <div key={idx} style={{backgroundColor:element , width:"100px",height:"100px"}}>{element}</div>
      ))} */}
    </>
  )
}

export default App
