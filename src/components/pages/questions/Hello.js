import { Link } from "react-router-dom";

function Hello({ tools: { setPage }}) {
    return (
        <div className="all_margin hello">
            <h1>Mimo questions</h1>
            <h2>Ouvi dizer que você está procurando por um presente, certo?</h2>
            <p className="box-paragraph">O Mimolino pode te ajudar a encontrar O melhor presente possível! Como?</p>
            <p className="box-paragraph">É só responder a este formulário com sinceridade. A partir das suas respostas vamos te enviar 3 opções incríveis de presentes. Aí só você escolher entre elas e aproveitar a sensação que só um bom presente pode provocar.</p>
            <p className="box-paragraph">No final das perguntas você vai poder optar por falar com a gente por whatsapp, dm no Instagram, ou email daqui para a frente</p>

            <button onClick={() => setPage(1)}>Começar a responder!</button>
            <Link to="/"><button>Voltar para a página inicial</button></Link>

        </div>
    )
}

export default Hello;