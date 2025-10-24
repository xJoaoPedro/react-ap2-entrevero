import { useState } from 'react'
import logo from './assets/computacaoulbra.jpeg'
import './App.css'
import Address from './components/Address'

function App() {
  const [nameValue, setNameValue] = useState('');

  return (
    <>
      <header>
        <img src={logo} />
        <h2>Entrevero</h2>
      </header>
      <main>
        <span>Seja bem vindo, {nameValue}</span>
        <input 
          type='text' 
          value={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
          />
        <section>
          <Address />
        </section>
        <section></section>
        <section></section>
      </main>
    </>
  )
}

export default App
