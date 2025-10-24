import { useState } from 'react'
import logo from './assets/computacaoulbra.jpeg'
import './App.css'
import Address from './components/Address'
import Form from './components/Form';
import PersonCard from './components/PersonCard';

function App() {
  const [nameValue, setNameValue] = useState('');
  const [persons, setPersons] = useState([]);

  const handleAddItem = (newPerson) => {
    setPersons((prev) => [...prev, newPerson]);
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
        <section>
          {persons.map((p, index) => (
            <PersonCard key={index} person={p} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
