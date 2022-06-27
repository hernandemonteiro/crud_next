import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCLiente from "../config/Db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCLiente();
    
    const {
        tabelaVisivel,
        formularioVisivel,
        exibirForm,
        exibirTabela
    } = useTabelaOuForm();
    
    const [
        cliente,
        setCliente
    ] = useState<Cliente>(Cliente.vazio());

    const [
        clientes,
        setClientes
    ] = useState<Cliente[]>([]);

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela();
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente);
        exibirForm();
    }

    async function clienteExcluir(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    function novoCliente(cliente: Cliente) {
        setCliente(Cliente.vazio());
        exibirForm();
    }

    return {
        exibirTabela,
        tabelaVisivel,
        formularioVisivel,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        clienteExcluir,
        clienteSelecionado,
        obterTodos
    }
}