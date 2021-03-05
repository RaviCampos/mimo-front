import { Link } from "react-router-dom";

function Hello({ tools: { setPage }}) {
    return (
        <div>
            <h1>Mimo questions</h1>
            <h2>Ouvi dizer que você está procurando por um presente, certo?</h2>
            <p>O Mimolino pode te ajudar a encontrar O melhor presente possível! Como?</p>
            <p>É só responder a este formulário com sinceridade. A partir das suas respostas vamos te enviar 3 opções incríveis de presentes. Aí só você escolher entre elas e aproveitar a sensação que só um bom presente pode provocar.</p>
            <p>no final das perguntas você vai poder optar por falar com a gente por whatsapp, dm no Instagram, ou email daqui para a frente</p>

            <Link to="/"><button>Voltar para a página inicial</button></Link>
            <button onClick={() => setPage(1)}>Começar a responder!</button>

        </div>
    )
}

export default Hello;