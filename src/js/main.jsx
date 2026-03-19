import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let contador=0

setInterval(() => {

let One = Math.floor((contador/1)%100)
let Two = Math.floor((contador/10)%100)
let Three = Math.floor((contador/100)%100)

contador++

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home digThree={Three} digOne={One} digTwo={Two}/>  
  </React.StrictMode>,
)
}, 1000)


