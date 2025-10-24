import { useState } from "react";

export default function PersonCard({ person }) {
    return <>
        <div className="border rounded-xl p-4 shadow-sm">
            <img src={person.image} alt="foto da pessoa" />
            <h2 className="text-lg font-semibold">{person.name}</h2>
            <p>Telefone: {person.telephone}</p>
            <p>Convidado: {person.isGuest ? "Sim" : "Não"}</p>
            <p>Pago: {person.isPaid ? "Sim" : "Não"}</p>
        </div>
    </>;
}