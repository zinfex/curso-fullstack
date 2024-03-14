import React from "react";

interface Usuario {
    nome: string;
    idade: number;
    sexo: string;
}

export default function PerfilUsuario({ nome, idade, sexo }: Usuario): React.ReactNode {
    return (
        <>
            {nome}
            <br />
            {idade}
            <br />
            {sexo}
        </>
    );
}