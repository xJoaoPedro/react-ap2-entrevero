import { useState } from "react";

export default function Address() {
    const [inputValue, setInputValue] = useState('');

    const [address, setAddress] = useState({ cep: '', bairro: '', cidade: '', rua: '' })

    const handleChange = (event) => {
        fetch('https://viacep.com.br/ws/' + event.target.value + '/json/')
            .then((response) => response.json())
            .then((data) => setAddress({
                cep: data.cep,
                bairro: !!data.bairro ? data.bairro : 'N/I',
                cidade: data.localidade,
                rua: !!data.logradouro ? data.logradouro : 'N/I'
            }))
            .catch((err) => setAddress({
                cep: '',
                bairro: '',
                cidade: '',
                rua: ''
            }))

        setInputValue(event.target.value);
    };


    return (
        // Contêiner principal sem fundo, apenas para layout (assumindo que o Glassmorphism do App.jsx já o envolve)
        <div className="flex flex-col items-center justify-start w-full">

            <input
                className="
                    w-full max-w-sm px-4 py-3 mb-6
                    border-2 border-white/50 rounded-xl
                    text-lg font-medium text-white placeholder-white/70
                    bg-white/10 /* Fundo do input levemente transparente */
                    focus:outline-none focus:ring-2 focus:ring-white focus:border-white
                    transition duration-300 ease-in-out shadow-md
                "
                type="text"
                maxLength={8}
                value={inputValue}
                onChange={handleChange}
                placeholder="Digite o CEP (8 dígitos)"
            />

            {/* Contêiner de resultados: Aplica glass-effect (assumindo que o glass-effect esteja na SECTION pai) */}
            <div className="w-full max-w-sm p-0 space-y-3">

                {/* Linha de Resultado: CEP */}
                <p className="flex justify-between border-b border-white/30 pb-2">
                    <span className="font-semibold text-sm text-white uppercase tracking-wider">CEP</span>
                    <span className="font-bold text-white">{address.cep}</span>
                </p>

                {/* Linha de Resultado: BAIRRO */}
                <p className="flex justify-between border-b border-white/30 pb-2">
                    <span className="font-semibold text-sm text-white uppercase tracking-wider">BAIRRO</span>
                    <span className="text-white/80 text-right">{address.bairro}</span>
                </p>

                {/* Linha de Resultado: CIDADE */}
                <p className="flex justify-between border-b border-white/30 pb-2">
                    <span className="font-semibold text-sm text-white uppercase tracking-wider">CIDADE</span>
                    <span className="text-white/80 text-right">{address.cidade}</span>
                </p>

                {/* Linha de Resultado: RUA */}
                <p className="flex justify-between">
                    <span className="font-semibold text-sm text-white uppercase tracking-wider">RUA</span>
                    <span className="text-white/80 text-right">{address.rua}</span>
                </p>

            </div>
        </div>
    );
}