import { Link } from "react-router-dom";

function HowTo() {
    return (
        <div>
            <h1>Mas como funciona o mimolino??</h1>
            <Link to="/"><button>Voltar para página inicial</button></Link>
            <Link to="/mimo-form"><button>Começar as perguntas</button></Link>
            {/* <button onClick={() => props.setPage("landing")}>Voltar para página inicial</button>
            <button onClick={() => props.setPage("mimoForm")}>Começar perguntas!</button> */}
        </div>
    )
}

export default HowTo;