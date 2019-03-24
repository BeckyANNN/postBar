


import React from "react"
import ReactDOM,{render}  from "react-dom";



import "../styles/index.less"


var app = document.getElementById("app");


import Layout from "./components"


import "./components"

var hotRender = ()=>{
    render(
        <Layout/>,
        app
    )
}

hotRender()

