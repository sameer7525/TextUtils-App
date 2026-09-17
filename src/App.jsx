import React from "react"
import Nav from "./component/Nav"
import TextForm from "./component/TextForm"

 export default function App() {
  return(
    <>
    <Nav title = "TextUtils"/>
    <div className="container my-3">
        <TextForm heading = "Enter the text to analyze"/>
    </div>
    
    </>
  )
}