import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <h1>Mimolino</h1>
            <h2>Presentes pessoais</h2>
            <Link to="/mimo-form"><button>Começar perguntas</button></Link>
            <Link to="/how-to"><button>Como funciona o mimolino</button></Link>
            {/* <button onClick={() => props.setPage("mimoForm")}>Começar perguntas!</button>
            <button onClick={() => props.setPage("howTo")}>Como funciona o mimolino?</button> */}
        </div>
    )
}

export default Landing;