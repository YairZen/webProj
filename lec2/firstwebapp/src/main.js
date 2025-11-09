import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btnTheme").addEventListener("click",function(){
        document.documentElement.classList.toggle("dark")
        document.getElementById("btnTheme").innerText= document.documentElement.classList.contains("dark")?"Light":"Dark"
    })});

setupCounter(document.querySelector('#counter'))
