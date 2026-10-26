import React from 'react'
import { useState } from 'react'

export default function Tools() {
const [text, setText] = useState("");
const [btntext, setBtntext] = useState("Enable Dark Mode")

const [myStyle, setMystyle] = useState({
color: 'black',
backgroundColor: 'white'
})

const handlebgChange = () => {
if (myStyle.color == "white") {
setMystyle({
color: "black",
backgroundColor: "white"
})
setBtntext("Enable Dark Mode")
}
else {
setMystyle({
color: "white",
backgroundColor: "black"
})
setBtntext("Enable Light Mode")
}
}

const handleUpClick = () => {
let newText = text.toUpperCase();
setText(newText)
}

const handleLoClick = () => {
let newText = text.toLowerCase();
setText(newText)
}

const handleChange = (e) => {
setText(e.target.value)
}

const handleclearClick = () => {
let newText = ""
setText(newText)
}

const handleOrgnise = () => {
let newText = text.replace(/\s+/g, ' ').trim();
setText(newText);
}

const handleExtraspaces = () => {
let newText = text.split(/[ ]+/).join(' ').trim();
setText(newText)
}

const copyText = () => {
navigator.clipboard.writeText(text);
}

// Fixed word count for empty text and multiple spaces
const words = text.trim() ? text.trim().split(/\s+/).length : 0;

return (
<div className='min-h-screen w-full' style={myStyle}>
<div className='mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:py-8'>

    <h1 className='mb-4 lg:text-2xl font-bold md:text-xl'>
      Enter the text to analyze
    </h1>

    <div className='mb-4'>
      <textarea
        className="box-border min-h-40 w-full max-w-full resize-y rounded-xl border-2 border-gray-500 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        value={text}
        onChange={handleChange}
        id="myBox"
        rows="8"
        placeholder='Enter your text'
      />
    </div>

    <div className='flex flex-wrap gap-2'>
      <button
        className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white sm:text-base transition-all duration-300 hover:bg-blue-600 active:scale-95 cursor-pointer"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>

      <button
        className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white sm:text-base transition-all duration-300 hover:bg-blue-600 active:scale-95 cursor-pointer"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>

      <button
        className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white sm:text-base transition-all duration-300 hover:bg-red-600 active:scale-95 cursor-pointer"
        onClick={handleclearClick}
      >
        Clear
      </button>

      <button
        className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white sm:text-base transition-all duration-300 hover:bg-blue-600 active:scale-95 cursor-pointer"
        onClick={copyText}
      >
        Copy Text
      </button>

      <button
        className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white sm:text-base transition-all duration-300 hover:bg-blue-600 active:scale-95 cursor-pointer"
        onClick={handleOrgnise}
      >
        Organise Your Text
      </button>

      <button
        className="rounded-lg bg-blue-500 px-3 py-2 text-sm text-white sm:text-base transition-all duration-300 hover:bg-blue-600 active:scale-95 cursor-pointer"
        onClick={handleExtraspaces}
      >
        Remove Extra Spaces
      </button>
    </div>

    <div className='mt-8'>
      <h2 className='mb-3 text-xl font-bold sm:text-2xl'>
        Your Text Summary
      </h2>

      <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <div className='rounded-xl border border-blue-300 p-4'>
          <p className='text-sm opacity-75'>Words</p>
          <p className='mt-1 text-2xl font-semibold'>{words}</p>
        </div>

        <div className='rounded-xl border border-blue-300 p-4'>
          <p className='text-sm opacity-75'>Characters</p>
          <p className='mt-1 text-2xl font-semibold'>{text.length}</p>
        </div>

        <div className='rounded-xl border border-blue-300 p-4'>
          <p className='text-sm opacity-75'>Reading Time</p>
          <p className='mt-1 text-2xl font-semibold'>
            {0.008 * words} Minutes
          </p>
        </div>
      </div>

      <h2 className='mb-3 mt-6 text-xl font-bold sm:text-2xl'>
        Preview
      </h2>

      <div className='min-h-24 rounded-xl border border-blue-300 p-4'>
        <p className='break-words whitespace-pre-wrap'>
          {text || 'Your text preview will appear here...'}
        </p>
      </div>

      <button
        className='mt-5 rounded-lg bg-blue-500 px-4 py-2 transition-all duration-300 hover:bg-blue-600 active:scale-95 cursor-pointer'
        onClick={handlebgChange}
      >
        {btntext}
      </button>
    </div>

  </div>
</div>

)
}

