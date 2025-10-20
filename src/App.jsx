import { useState } from 'react'
import logo from './assets/computacaoulbra.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src={logo} />
        <h2>Entrevero</h2>
      </header>
    </>
  )
}

export default App
