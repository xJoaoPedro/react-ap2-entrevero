import { useState } from 'react'
import logo from './assets/computacaoulbra.jpeg'
import './App.css'
import Address from './components/Address'
import Form from './components/Form';

function App() {
  const [nameValue, setNameValue] = useState('');
  const [person, setPerson] = useState([]);

  const handleAddItem = (newPerson) => {
    setItems((prev) => [...prev, newPerson]);
    console.log(items)
  };

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
        <section>
          <Form onAddItem={handleAddItem}></Form>
        </section>
        <section></section>
      </main>
    </>
  )
}

export default App
