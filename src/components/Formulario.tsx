import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";
import Cliente from "../core/Cliente";

interface FormProps {
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado?: () => void;
}

export default function Form(props: FormProps) {

    const id = props.cliente.Id ?? null;
    const [nome, setNome] = useState(props.cliente?.Nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.Idade ?? '');
    
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    tipo='number' name='id' texto='Código' value={id} placeholder={id} />
            ) : false}
            <Entrada
                tipo='text' texto='Nome' name="nome"
                placeholder="Digite seu nome!" value={nome}
                valorMudou={setNome}
            />
            <Entrada
                tipo='number' texto='Idade' name="idade"
                placeholder="Digite sua Idade!"
                value={idade}
                MinNumber={'0'}
                valorMudou={setIdade}
            />
            <div className="mt-3 flex justify-end">
                <Botao
                    click={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                    className="m-1 from-blue-600 to-blue-500"
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao
                    click={props.cancelado}
                    className="m-1 from-gray-600 to-gray-500"
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}