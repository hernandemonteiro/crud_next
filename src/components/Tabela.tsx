import Cliente from "../core/Cliente";
import { IconeDelete, IconeEdicao } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluir?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluir || props.clienteSelecionado;

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="p-4 ">Código</th>
                <th className="p-4 ">Nome</th>
                <th className="p-4 ">Idade</th>
                {exibirAcoes ? <th className="p-4 ">Ações</th> : false}
            </tr>

        )
    }

    function renderizarDados() {

        return (props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.Id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-300'}`}>
                    <td className="p-4">{cliente.Id}</td>
                    <td className="p-4 ">{cliente.Nome}</td>
                    <td className="p-4 ">{cliente.Idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        }));
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (

                    <button onClick={() => props.clienteSelecionado?.(cliente)}
                        className="flex justify-center items-center
                    text-green-600 rounded-full hover:bg-purple-50 p-2 m-1">
                        {IconeEdicao}
                    </button>

                ) : false}
                {props.clienteExcluir ? (
                    <button onClick={() => props.clienteExcluir?.(cliente)}
                        className="flex justify-center items-center
                text-red-500 rounded-full hover:bg-purple-50 p-2 m-1">
                        {IconeDelete}
                    </button>) : false}
            </td>
        )
    }

    return (

        <table className="w-full text-center overflow-scroll rounded-xl">
            <thead className="text-gray-300 bg-gradient-to-r from-purple-500 to-purple-800
            ">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    );
}