import React, { useState } from "react"
import Nav from "./components/Nav"
// import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
// import Home from "./Pages/Home"
import Home from "./pages/Home"
import Tools from "./pages/Tools"
import About from "./pages/About"
 export default function App() {
  const[mode,setMode] = useState('false');
  return(
    <>
    <Nav title = "TextUtils" mode={mode}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tool" element={<Tools/>}/>
    </Routes>

    {/* <Footer/> */}
  
    </>
  )
}