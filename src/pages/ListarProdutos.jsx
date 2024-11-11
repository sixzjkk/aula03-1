import styles from '../styles/listarProdutos.module.css';

export default function ListarProdutos({ lista }) {
    if (loading) {
        if (lista.length == 0) {
            return (
                <Loading/>
            )
        }
    }
    return (
        <>
            <ul className={styles.bloco}>
                {lista.map(produto => (
                    <li key={produto.id}>
                        <img src={produto.image} alt={produto.title} className={styles.imagem} />
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <button className={styles.precoBotao}>R${produto.price}</button>
                    </li>
                ))}
            </ul>
        </>
    );
}