import { useState } from "react";

export default function Address() {
    const [inputValue, setInputValue] = useState('');

    const [address, setAddress] = useState({
        cep: 'cepteste',
        bairro: 'bairroteste',
        cidade: 'cidadeteste',
        rua: 'ruateste'
    })

    const handleChange = (event) => {
        fetch('https://viacep.com.br/ws/' + event.target.value + '/json/')
            .then((response) => response.json())
            .then((data) => {
                setAddress({
                    cep: data.cep,
                    bairro: !!data.bairro ? data.bairro : 'N/I',
                    cidade: data.localidade,
                    rua: !!data.logradouro ? data.logradouro : 'N/I'
                });
            })
            .catch((error) => setAddress({
                    cep: '',
                    bairro: '',
                    cidade: '',
                    rua: ''
                }))

        setInputValue(event.target.value);
    };

    return <div>
        <input
          type="text"
          maxLength={8}
          value={inputValue}
          onChange={handleChange}
        />
        <p>CEP</p> {address.cep} <br />
        <p>BAIRRO</p> {address.bairro} <br />
        <p>CIDADE</p> {address.cidade} <br />
        <p>RUA</p> {address.rua} <br />
    </div>    
}