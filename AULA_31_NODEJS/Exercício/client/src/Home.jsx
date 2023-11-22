import Clientes from "./cadastros/Clientes";
import Produtos from "./cadastros/Produtos";

function Home() {
    return (
        <div className="containers">
            <div className="clientes-container"> <Clientes /> </div>

            <div className="produtos-container"> <Produtos /> </div>
        </div>
    )
}

export default Home;