import React from 'react'
import ReactDom from 'react-dom/client'
import {FirstApp} from "./FirstApp.jsx";
import './styles.css'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <FirstApp title="Hola, Soy Goku" subTitle="123"/>
    </React.StrictMode>

);


