import { useState } from 'react'



function App() {
  const [bgColor, setBgColor] = useState("red");

  console.log(bgColor);

  return (
  
    <div className= " w-[2000px]  h-screen   "
    style={{backgroundColor: bgColor}}>
      <div className="  fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
      <div className= "  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("red")} style={{backgroundColor: "red"}}>Red</button>
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("green")} style={{backgroundColor: "green"}}>Green</button>
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("orange")} style={{backgroundColor: "orange"}}>Orange</button>
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
        <button className='w-16 h-11 rounded-full' onClick={() => setBgColor("pink")} style={{backgroundColor: "pink"}}>Pink</button>
      </div>
      </div>
      </div>
    
  );
}

export default App;

