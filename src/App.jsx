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
    <div className="min-h-screen pb-12 bg-gradient-to-br from-[#355b8c] to-[#4a6b99]">

      <header className="
            sticky top-0 z-50 glass-effect shadow-xl 
            flex items-center justify-between flex-wrap sm:flex-nowrap /* Flex-nowrap para impedir quebra em tela pequena */
            px-4 sm:px-8 py-3 h-auto 
        ">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <img
            src={logo}
            alt="Logo Entrevero"
            className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-white"
          />
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Entrevero
          </h2>
        </div>

        <div className="flex items-center space-x-4 w-full sm:w-auto mt-2 sm:mt-0"> {/* Margin top ajustado para telas pequenas */}
          <span className="text-sm font-semibold text-white whitespace-nowrap hidden md:inline">
            Bem-vindo(a), <span className="text-white font-bold">{nameValue || 'Usuário!'}</span>
          </span>

          <input
            type='text'
            className="
                        w-40 px-3 py-2 border border-white/50 rounded-lg 
                        text-sm placeholder-white/70 text-white 
                        bg-white/10
                        focus:outline-none focus:ring-1 focus:ring-white focus:border-white 
                        transition duration-300
                    "
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
            placeholder="Seu nome"
          />
        </div>
      </header>

      <main className="
            container mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8
        ">

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-8">

          <section className="lg:col-span-3 p-6 rounded-xl shadow-2xl glass-effect mb-8 lg:mb-0 text-white">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/30 pb-2">
              Usuários Cadastrados
            </h3>

            <div className="
                h-[35rem] overflow-y-auto pr-4 pt-1
                grid grid-cols-1 md:grid-cols-2 gap-4 
            ">
              {persons.map((p, index) => (
                <PersonCard key={index} person={p} />
              ))}
            </div>
          </section>

          <div className="lg:col-span-2 space-y-8">

            <section className="p-6 rounded-xl shadow-2xl glass-effect">
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/30 pb-2">
                Cadastro de Novo Usuário
              </h3>
              <div className="text-white">
                <Form onAddItem={handleAddItem}></Form>
              </div>
            </section>

            <section className="p-6 rounded-xl shadow-2xl glass-effect">
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/30 pb-2">
                Consulta de Endereço (CEP)
              </h3>
              <div className="text-white">
                <Address />
              </div>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App