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
let mode = 'start';
let inputVal = 0; // Stores what the user types
let targetAlert = null; // Stores when to show the alert

const startCounter = () => {
    mode = 'start';
};

const stopCounter = () => {
    mode = 'stop';
};

const resetCounter = () => {
    mode = 'reset';
};

const handleInputChange = (e) => {    
    inputVal = parseInt(e.target.value);
};

const countDownCounter = () => {
    contador = inputVal; 
    mode = 'countDown';
};

const alertCounter = () => {
    targetAlert = inputVal;
};

setInterval(() => {

let One = Math.floor((contador/1)%10)
let Two = Math.floor((contador/10)%10)
let Three = Math.floor((contador/100)%10)
let Four = Math.floor((contador/1000)%10)

if (contador === targetAlert) {
    alert("Counter has reached "+targetAlert);       
}

if (mode === 'start') {
    contador++;
}
else if (mode === 'stop') {
    contador = contador;    
}
else if (mode === 'reset') {
    contador = 0;
    mode = 'start';
}
else if (mode === 'countDown') {
    if (contador > 0) {        
        contador--;
    }
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home digFour={Four} digThree={Three} digTwo={Two} digOne={One} 
            onStart={startCounter}
            onStop={stopCounter}
            onReset={resetCounter} 
            onCountDown={countDownCounter}
            onAlert={alertCounter}
            onInputChange={handleInputChange} 
            inputValue={inputVal}
        />  
    </React.StrictMode>,
)
}, 1000)










