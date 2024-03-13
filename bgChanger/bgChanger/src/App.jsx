import { useState } from 'react'
import Button from './components/button.jsx'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const generateRandomColor = ()=>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    return   rgb(red, green, blue);
  }

  return (
    <div className='w-full h-screen duration-200'  style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("magenta")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"magenta"}}>Magenta</button>
          <button onClick={()=>setColor("lavender")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"lavender"}}>Lavender</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("brown")} className='outline-none px-4 text-white rounded-lg' style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={()=>setColor(generateRandomColor())} className='outline-none, px-4 text-white rounded-lg' style={{backgroundColor:"black"}}>Custom Color</button>
        </div>
      </div>
    </div>
  )
}

export default App
