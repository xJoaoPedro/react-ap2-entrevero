import { useState } from "react";

export default function Form({ onAddItem }) {
    const [person, setPerson] = useState({ name: '', telephone: '', isGuest: false, isPaid: false, image: '' })

    const createPerson = (event) => {
        event.preventDefault();
        onAddItem(person);
        setPerson({ name: '', telephone: '', isGuest: false, isPaid: false, image: '' });
    };

    const handleRadioChange = (e) => {
        let { name, value } = e.target;
        if (value === "true") value = true;
        if (value === "false") value = false;
        setPerson({ ...person, [name]: value });
    };

    return (
        // Contêiner principal sem fundo e sem margens desnecessárias (Layout responsabilidade do App.jsx)
        <div className="w-full">

            {/* O formulário em si não precisa de glass-effect, pois ele está envolto pela SECTION no App.jsx */}
            <form onSubmit={createPerson} className="
                w-full space-y-4
            ">

                {/* Removido o título, pois ele está na SECTION pai no App.jsx */}

                {/* Agrupamento dos Inputs de Texto */}
                <div className="space-y-4">

                    {/* Input: Nome */}
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={person['name']}
                        onChange={(e) => setPerson({ ...person, name: e.target.value })}
                        className="
                            w-full px-4 py-3 border border-white/50 rounded-lg shadow-sm 
                            text-white placeholder-white/70 bg-white/10
                            focus:ring-white focus:border-white transition duration-300 
                            focus:outline-none
                        "
                    />

                    {/* Input: Telefone */}
                    <input
                        type="tel"
                        placeholder="Telefone de Contato"
                        value={person['telephone']}
                        onChange={(e) => setPerson({ ...person, telephone: e.target.value })}
                        className="
                            w-full px-4 py-3 border border-white/50 rounded-lg shadow-sm 
                            text-white placeholder-white/70 bg-white/10
                            focus:ring-white focus:border-white transition duration-300 
                            focus:outline-none
                        "
                    />

                    {/* Input: URL da Imagem */}
                    <input
                        type="text"
                        placeholder="URL da Imagem de Perfil"
                        value={person['image']}
                        onChange={(e) => setPerson({ ...person, image: e.target.value })}
                        className="
                            w-full px-4 py-3 border border-white/50 rounded-lg shadow-sm 
                            text-white placeholder-white/70 bg-white/10
                            focus:ring-white focus:border-white transition duration-300 
                            focus:outline-none
                        "
                    />
                </div>

                {/* Grupo de Botões de Rádio: isGuest */}
                <div className="pt-4 border-t border-white/30">
                    <p className="block text-sm font-medium text-white mb-2">
                        É um Convidado?
                    </p>
                    <div className="flex space-x-4 justify-center">
                        {/* Opção SIM */}
                        <div className="relative flex items-center">
                            <input type="radio" name="isGuest" id="isGuestTrue" value="true"
                                checked={person.isGuest === true}
                                onChange={handleRadioChange}
                                className="absolute opacity-0 w-0 h-0"
                            />
                            {/* Ajuste o hover para usar a cor principal (#355b8c) e contraste branco */}
                            <label htmlFor="isGuestTrue" className={`
                            px-6 py-2 rounded-full cursor-pointer transition duration-200 
                            text-sm font-semibold shadow-md 
                            ${person.isGuest === true
                                    ? 'bg-green-600 text-white shadow-[#355b8c]/50'
                                    : 'bg-white/10 text-white hover:bg-white/30'}
                        `}>
                                Sim
                            </label>
                        </div>

                        {/* Opção NÃO */}
                        <div className="relative flex items-center">
                            <input type="radio" name="isGuest" id="isGuestFalse" value="false"
                                checked={person.isGuest === false}
                                onChange={handleRadioChange}
                                className="absolute opacity-0 w-0 h-0"
                            />
                            <label htmlFor="isGuestFalse" className={`
                            px-6 py-2 rounded-full cursor-pointer transition duration-200 
                            text-sm font-semibold shadow-md 
                            ${person.isGuest === false
                                    ? 'bg-red-600 text-white shadow-red-300/50'
                                    : 'bg-white/10 text-white hover:bg-white/30'}
                        `}>
                                Não
                            </label>
                        </div>
                    </div>
                </div>

                {/* Grupo de Botões de Rádio: isPaid */}
                <div className="pt-4 border-t border-white/30">
                    <p className="block text-sm font-medium text-white mb-2">
                        Pagamento Recebido?
                    </p>
                    <div className="flex space-x-4 justify-center">
                        {/* Opção SIM */}
                        <div className="relative flex items-center">
                            <input type="radio" name="isPaid" id="isPaidTrue" value="true"
                                checked={person.isPaid === true}
                                onChange={handleRadioChange}
                                className="absolute opacity-0 w-0 h-0"
                            />
                            <label htmlFor="isPaidTrue" className={`
                            px-6 py-2 rounded-full cursor-pointer transition duration-200 
                            text-sm font-semibold shadow-md 
                            ${person.isPaid === true
                                    ? 'bg-green-600 text-white shadow-green-300/50'
                                    : 'bg-white/10 text-white hover:bg-white/30'}
                        `}>
                                Sim
                            </label>
                        </div>

                        {/* Opção NÃO */}
                        <div className="relative flex items-center">
                            <input type="radio" name="isPaid" id="isPaidFalse" value="false"
                                checked={person.isPaid === false}
                                onChange={handleRadioChange}
                                className="absolute opacity-0 w-0 h-0"
                            />
                            <label htmlFor="isPaidFalse" className={`
                            px-6 py-2 rounded-full cursor-pointer transition duration-200 
                            text-sm font-semibold shadow-md 
                            ${person.isPaid === false
                                    ? 'bg-red-600 text-white shadow-red-300/50'
                                    : 'bg-white/10 text-white hover:bg-white/30'}
                        `}>
                                Não
                            </label>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="
                        w-full flex justify-center py-3 mt-8 
                        border border-transparent rounded-lg shadow-lg 
                        text-lg font-semibold text-white bg-[#355b8c] /* Cor Principal */
                        hover:bg-[#4a6b99] focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 
                        transition duration-300 ease-in-out transform hover:scale-[1.01] active:scale-[0.99]
                    "
                >
                    Salvar Cadastro
                </button>
            </form>
        </div>
    );
}