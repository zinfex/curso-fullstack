import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Produtos() {
    
    return(
        <>
            <div>
                <h1>Produtos</h1>
                <Link to={'/'}>Voltar</Link>
            </div>

            <div>
                <Link to={'novoproduto'}><Button>Novo produto</Button></Link>
            </div>
        </>
    )
}

export default Produtos;