import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card({component}) {
    const div = document.querySelector(component);
  

  return (
    <>
      
        <div>
        <body>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <footer>
        <h3>Vite + React</h3>
        </footer>
        </body>
        </div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo nodejs" alt="nodejs logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo html" alt="html logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo java" alt="java logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo javascript" alt="javascript logo" />
        </a>
        <h3>Vite + React</h3><h3>Vite + React</h3><h3>Vite + React</h3>
      
      
    
    </>
  )
}

export default Card