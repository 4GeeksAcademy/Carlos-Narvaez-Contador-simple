import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


let contador = 0;
let myInterval = setInterval(Counter, 1000);

const resetCounter = () => {
    contador = 0;
};

const startCounter = () => {
    // Only start if there isn't one already running to prevent "speeding up"
    if (!myInterval) {
        myInterval = setInterval(Counter, 1000);
    }
};

const stopCounter = () => {
    clearInterval(myInterval);
    myInterval = null; // Clear the variable so startCounter knows it's stopped
};

function Counter() {
    // Logic for digits
    let One = Math.floor((contador / 1) % 10);
    let Two = Math.floor((contador / 10) % 10);
    let Three = Math.floor((contador / 100) % 10);
    let Four = Math.floor((contador / 1000) % 10);

    contador++;

    // Note: In React 18+, you usually create the root ONCE outside the function.
    // This is a quick fix for your current "setInterval-driven" architecture:
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Home 
                digFour={Four} 
                digThree={Three} 
                digTwo={Two} 
                digOne={One} 
                onReset={resetCounter} 
                onStart={startCounter}
                onStop={stopCounter}  
            />  
        </React.StrictMode>
    );
}










