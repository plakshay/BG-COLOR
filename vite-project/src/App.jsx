import { useState,useEffect } from 'react';

function App() {
  const [color, setColor] = useState("white"); 
  useEffect(() => {
    document.body.style.backgroundColor = color; // Apply background color to body
  }, [color]);

  return (
   
    <div
      className="w-full h-screen duration-200"
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl text-black"> 
          <button
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}> Red </button>
          <button
          onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}> Blue </button>
          <button
          onClick={()=>{setColor("yellow")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}}> Yelllow</button>
          <button
          onClick={()=>{setColor("black")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}> Black</button>
          <button
          onClick={()=>{setColor("Green")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}> Green</button>
          </div></div> 
    </div>
    
  );
}

export default App;