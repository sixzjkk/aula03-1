import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setProdutos(dados);
            } catch (erro) {
                alert('Ocorreu um erro na comunicação com o servidor');
            }
        };
        receberListaProdutos();
    }, []);

    return (
        <>
            <header>
                <h1>Loja</h1>
                <nav>
                    <a href="">Home</a>
                    <a href="">Produtos</a>
                    <a href="">Contato</a>
                </nav>
            </header>
            <ListarProdutos lista={produtos} />
            <footer>
                <p>&copy; 2024. Todos os direitos reservados a Jenifer Porfirio.</p>
            </footer>
        </>
    );
}   