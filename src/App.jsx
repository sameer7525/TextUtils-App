import React from "react"
import Nav from "./components/Nav"
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
// import Home from "./Pages/Home"
import Home from "./pages/Home"
import Tools from "./pages/Tools"
import About from "./pages/About"
 export default function App() {
  return(
    <>
    <Nav title = "TextUtils"/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tool" element={<Tools/>}/>
    </Routes>

    <Footer/>
  
    </>
  )
}