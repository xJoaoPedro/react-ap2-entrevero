import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({name: 'teste', telephone: 'teste', isGuest: 'teste', isPaid: 'teste', image: 'teste'})

    const createPerson = (event) => {
        event.preventDefault();
        onAddItem(personValue);
        setPerson({name: '', telephone: '', isGuest: '', isPaid: '', image: ''});
    };

    return <div>
        <form onSubmit={createPerson}>
            
            <button type="submit"></button>
        </form>
        <input
            type="text"
            placeholder="NAOAOOAOA"
            maxLength={8}
            value={inputValue}
            onChange={handleChange}
        />
    </div>
}