import { Link } from "react-router-dom";

function MimoForm(props) {
    return (
        <div>
            <h1>Mimo questions</h1>
            <h2>Responda as próximas perguntas para que a gente possa construir o seu presente ideal</h2>
            <p>nós nos vamos te mandar dentro de 24h três opções toltalmente customizadas para você poder escolher!</p>
            <p>no final das perguntas você vai poder optar por falar com a gente por email ou whatsapp daqui para a frente</p>
            <Link to="/"><button>Voltar para a página inicial</button></Link>
            <Link to="/how-to"><button>Como funciona o mimolino</button></Link>
            
            {/* <button onClick={() => props.setPage("landing")}>Voltar para página inical</button>
            <button onClick={() => props.setPage("howTo")}>Como funciona o mimolino?</button> */}
        </div>
    )
}

export default MimoForm;