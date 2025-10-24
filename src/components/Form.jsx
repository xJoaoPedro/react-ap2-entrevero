import { useState } from "react";

export default function Form({ onAddItem }) {
    const [person, setPerson] = useState({name: '', telephone: '', isGuest: false, isPaid: false, image: ''})

    const createPerson = (event) => {
        event.preventDefault();
        onAddItem(person);
        setPerson({name: '', telephone: '', isGuest: false, isPaid: false, image: ''});
    };

    const handleRadioChange = (e) => {
        let { name, value } = e.target;
        if (value === "true") value = true;
        if (value === "false") value = false;
        setPerson({ ...person, [name]: value });
    };

    return <div>
        <form onSubmit={createPerson}>
            <input
                type="text"
                placeholder="Nome"
                value={person['name']}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
            
            <input
                type="tel"
                placeholder="Telefone"
                value={person['telephone']}
                onChange={(e) => setPerson({ ...person, telephone: e.target.value })}
            />

            <input type="radio"name="isGuest" id="isGuestTrue" value="true"
                checked={person.isGuest === true}
                onChange={handleRadioChange}
            />
            <label htmlFor="isGuestTrue">Sim</label>

            <input type="radio" name="isGuest" id="isGuestFalse" value="false"
                checked={person.isGuest === false}
                onChange={handleRadioChange}
            />
            <label htmlFor="isGuestFalse">Não</label>


            <input type="radio"name="isPaid" id="isPaidTrue" value="true"
                checked={person.isPaid === true}
                onChange={handleRadioChange}
            />
            <label htmlFor="isPaidTrue">Sim</label>

            <input type="radio" name="isPaid" id="isPaidFalse" value="false"
                checked={person.isPaid === false}
                onChange={handleRadioChange}
            />
            <label htmlFor="isPaidFalse">Não</label>

            <input
                type="text"
                placeholder="URL"
                value={person['image']}
                onChange={(e) => setPerson({ ...person, image: e.target.value })}
            />

            <button type="submit"></button>
        </form>    
    </div>
}