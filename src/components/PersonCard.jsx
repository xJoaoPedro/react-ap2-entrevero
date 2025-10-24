import { useState } from "react";

export default function PersonCard({ person }) {

    // Define a cor do status para "Pago" ou "Convidado"
    const statusColor = (isTrue) =>
        isTrue ? 'text-green-400 font-bold' : 'text-red-400 font-bold';

    // Define a cor para o status de pagamento (fundo do badge)
    const paidBadgeColor = person.isPaid ? 'bg-green-600' : 'bg-red-600';


    return (
        <div className="
            glass-effect border border-white/30 rounded-xl p-5 shadow-2xl 
            text-white w-full transition duration-300 hover:scale-[1.02]
        ">

            <div className="flex items-center space-x-4">

                {/* Imagem (Avatar) */}
                <img
                    src={person.image}
                    alt={`Foto de ${person.name}`}
                    // Estilo da Imagem: Redonda, com borda sutil
                    className="h-16 w-16 rounded-full object-cover shadow-lg ring-2 ring-white/70"
                />

                {/* Informações Primárias (Nome e Telefone) */}
                <div className="flex-grow">
                    <h2 className="text-xl font-extrabold text-white tracking-wide">
                        {person.name}
                    </h2>
                    <p className="text-sm text-white/70">
                        {person.telephone}
                    </p>
                </div>

                {/* Status (Pago) em forma de Badge */}
                <span className={`
                    text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md
                    ${paidBadgeColor}
                `}>
                    {person.isPaid ? "PAGO" : "PENDENTE"}
                </span>

            </div>

            {/* Separador */}
            <hr className="my-4 border-white/20" />

            {/* Status Detalhado (Convidado) */}
            <div className="flex justify-between items-center text-sm">
                <p className="font-semibold text-white/80">Convidado</p>
                <p className={statusColor(person.isGuest)}>
                    {person.isGuest ? "SIM" : "NÃO"}
                </p>
            </div>

        </div>
    );
}