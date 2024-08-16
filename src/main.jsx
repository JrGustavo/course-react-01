import React from 'react'
import ReactDom from 'react-dom/client'
import './styles.css'
import {CounterApp} from "./CounterApp.jsx";


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <CounterApp  value={10}/>
    </React.StrictMode>

);


