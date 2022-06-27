import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    tabelaVisivel,
    exibirTabela,
    cliente,
    clientes,
    clienteSelecionado,
    salvarCliente,
    clienteExcluir,
    novoCliente
  } = useClientes();

  return (
    <div className="flex h-screen justify-center
      items-center bg-gradient-to-r from-purple-500
    to-blue-600 text-white">
      <title>Crud Simples - Next.js e Firebase!</title>
      <Layout titulo="Crud Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                click={novoCliente}
                className="mb-3 from-green-600 to-green-500">
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluir={clienteExcluir} />
          </>
        ) : (
          <Formulario
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela()}
            cliente={cliente} />
        )}
      </Layout>
    </div>
  )
}