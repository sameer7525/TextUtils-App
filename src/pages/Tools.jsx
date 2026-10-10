import React from 'react'
import { useState } from 'react'

export default function Tools() {
  const[text,setText]=useState("");
  const[btntext,setBtntext]=useState("Enable Light Mode")
  
  const[myStyle,setMystyle]=useState({
     color:'white',
     backgroundColor: 'black'
    })

    const handlebgChange=()=>{
      if(myStyle.color == "white"){
        setMystyle({
          color:"black",
          backgroundColor:"white"
        })
        setBtntext("Enable Dark Mode")
      }
      else{
        setMystyle({
          color:"white",
          backgroundColor:"black"
        })
        setBtntext("Enable Light Mode")
      }
  
    }

    const handleUpClick=()=>{
    //   console.log("upper case was clicked"+text)
      let newText = text.toUpperCase();
      setText(newText)
      
    }

    const handleLoClick=()=>{
    //   console.log("upper case was clicked"+text)
      let newText = text.toLowerCase();
      setText(newText)
      
    }

    const handleChange=(e)=>{
        // console.log("onChnage")
        setText(e.target.value)
    }

    const handleclearClick=()=>{
      let newText = " "
      setText(newText)
    }

    
  return (
  <div className='w-screen h-screen'style={myStyle}>
    <div className='container mx-10'>
        <h1>Enter the text to analyze</h1>
      <div className='mb-3'>
        <textarea className="form-control w-full border-2 border-gray-500 rounded-xl outline-none" value={text} onChange={handleChange} id="myBox" rows="8" placeholder='Enter your text'></textarea>
      </div>
      <button className="btn btn-primary bg-blue-500 rounded p-1 cursor-pointer hover:bg-blue-600" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary bg-blue-500 rounded m-4 p-1 cursor-pointer hover:bg-blue-600" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary bg-blue-500 rounded p-1 cursor-pointer hover:bg-blue-600" onClick={handleclearClick}>Clear</button>
    </div>
    <div className="container mx-10">
        <h2>Your text summary</h2>
        <p className='mx-11'>{text.split(" ").length} Words and {text.length} charactor</p>
        <p className='mx-10'>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        
        <button className='px-2 py-1 bg-blue-500 rounded hover:bg-blue-600' onClick={handlebgChange}>{btntext}</button>

    </div>
  </div>
  )
}
