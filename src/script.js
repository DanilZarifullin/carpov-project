import { App } from "./App/App.js"
import React from "react"
import { createRoot } from 'react-dom/client'
import "./common.css"
const domNode = document.getElementById("root")
const root = createRoot(domNode)
root.render(<App />)
