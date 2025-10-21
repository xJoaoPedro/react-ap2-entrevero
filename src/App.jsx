import { useState } from 'react'
import logo from './assets/computacaoulbra.jpeg'
import './App.css'
import Address from './components/Address'

function App() {
  return (
    <>
      <header>
        <img src={logo} />
        <h2>Entrevero</h2>
      </header>
      <main>
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
